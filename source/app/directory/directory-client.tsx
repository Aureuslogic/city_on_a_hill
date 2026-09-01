'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  businessCategories,
  businessLocations,
  businessMarkets,
  businessProfileTypes,
  businesses,
  getBusinessProfileType,
} from '../../lib/businesses';

const allTypes = 'All';
const allCategories = 'All categories';
const allMarkets = 'All countries and regions';
const allCities = 'All cities';
const allLanguages = 'All languages';
const allDelivery = 'Any delivery';
const allTrust = 'All listings';

export default function DirectoryClient() {
  const [query, setQuery] = useState('');
  const [profileType, setProfileType] = useState(allTypes);
  const [category, setCategory] = useState(allCategories);
  const [market, setMarket] = useState(allMarkets);
  const [city, setCity] = useState(allCities);
  const [language, setLanguage] = useState(allLanguages);
  const [delivery, setDelivery] = useState(allDelivery);
  const [trust, setTrust] = useState(allTrust);
  const [sort, setSort] = useState('Recommended');
  const [ready, setReady] = useState(false);

  const languages = useMemo(
    () => [...new Set(businesses.flatMap((business) => business.languages ?? ['English']))].sort(),
    [],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q');
    const initialMarket = params.get('market');
    const initialType = params.get('type');
    if (initialQuery) setQuery(initialQuery);
    if (initialMarket && businessMarkets.includes(initialMarket as (typeof businessMarkets)[number])) setMarket(initialMarket);
    if (initialType && businessProfileTypes.includes(initialType as (typeof businessProfileTypes)[number])) setProfileType(initialType);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (market !== allMarkets) params.set('market', market);
    if (profileType !== allTypes) params.set('type', profileType);
    const nextUrl = params.size ? `/directory?${params.toString()}` : '/directory';
    window.history.replaceState({}, '', nextUrl);
  }, [market, profileType, query, ready]);

  const filteredBusinesses = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const matching = businesses.filter((business) => {
      const type = getBusinessProfileType(business);
      const searchable = [
        business.name,
        type,
        business.category,
        business.location,
        business.market,
        business.serves,
        business.summary,
        business.delivery ?? '',
        ...(business.languages ?? []),
        ...business.services,
        ...business.keywords,
      ].join(' ').toLowerCase();

      return (
        (!needle || searchable.includes(needle)) &&
        (profileType === allTypes || type === profileType) &&
        (category === allCategories || business.category === category) &&
        (market === allMarkets || business.market === market) &&
        (city === allCities || business.location === city) &&
        (language === allLanguages || (business.languages ?? ['English']).includes(language)) &&
        (delivery === allDelivery || business.delivery === delivery) &&
        (trust === allTrust || (trust === 'Verified only' ? business.verified : business.featured))
      );
    });

    return matching.sort((a, b) => {
      if (sort === 'Name A–Z') return a.name.localeCompare(b.name);
      if (sort === 'Country A–Z') return a.market.localeCompare(b.market);
      return Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name);
    });
  }, [category, city, delivery, language, market, profileType, query, sort, trust]);

  const resetFilters = () => {
    setQuery('');
    setProfileType(allTypes);
    setCategory(allCategories);
    setMarket(allMarkets);
    setCity(allCities);
    setLanguage(allLanguages);
    setDelivery(allDelivery);
    setTrust(allTrust);
    setSort('Recommended');
  };

  const hasFilters = query || profileType !== allTypes || category !== allCategories || market !== allMarkets ||
    city !== allCities || language !== allLanguages || delivery !== allDelivery || trust !== allTrust;

  return (
    <div className="directory-browser">
      <div className="marketplace-tabs" role="group" aria-label="Directory profile type">
        {[allTypes, ...businessProfileTypes].map((item) => (
          <button
            className={profileType === item ? 'is-active' : ''}
            type="button"
            aria-pressed={profileType === item}
            onClick={() => setProfileType(item)}
            key={item}
          >
            {item === allTypes ? 'Discover all' : item}
          </button>
        ))}
        <a href="/events">Events</a>
      </div>

      <form className="directory-search-panel directory-search-panel-expanded" onSubmit={(event) => event.preventDefault()}>
        <div className="directory-search-field">
          <label htmlFor="directory-search">What are you looking for?</label>
          <div>
            <span aria-hidden="true">⌕</span>
            <input
              id="directory-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search businesses, experts, communities or services…"
              autoComplete="off"
            />
          </div>
        </div>
        <label>
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>{allCategories}</option>
            {businessCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Country or region
          <select value={market} onChange={(event) => setMarket(event.target.value)}>
            <option>{allMarkets}</option>
            {businessMarkets.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          City
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            <option>{allCities}</option>
            {businessLocations.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Language
          <select value={language} onChange={(event) => setLanguage(event.target.value)}>
            <option>{allLanguages}</option>
            {languages.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Delivery
          <select value={delivery} onChange={(event) => setDelivery(event.target.value)}>
            <option>{allDelivery}</option>
            <option>Online</option>
            <option>In person</option>
            <option>Online &amp; in person</option>
          </select>
        </label>
        <label>
          Trust
          <select value={trust} onChange={(event) => setTrust(event.target.value)}>
            <option>{allTrust}</option>
            <option>Verified only</option>
            <option>Featured profiles</option>
          </select>
        </label>
      </form>

      <div className="directory-results-bar directory-results-bar-strong">
        <p aria-live="polite">
          <strong>{filteredBusinesses.length}</strong> {filteredBusinesses.length === 1 ? 'profile' : 'profiles'} found
        </p>
        <div>
          <label>
            <span className="sr-only">Sort directory profiles</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option>Recommended</option>
              <option>Name A–Z</option>
              <option>Country A–Z</option>
            </select>
          </label>
          {hasFilters && <button type="button" onClick={resetFilters}>Clear filters</button>}
        </div>
      </div>

      {filteredBusinesses.length > 0 ? (
        <div className="business-card-grid">
          {filteredBusinesses.map((business) => (
            <article className="business-card business-card-marketplace" data-accent={business.accent} key={business.slug}>
              <a className="business-card-media" href={`/business/${business.slug}`} aria-label={`View ${business.name}`}>
                {business.media.src ? (
                  <img src={business.media.src} alt={`${business.name} — ${business.media.label}`} />
                ) : (
                  <span aria-hidden="true">{business.media.kind === 'video' ? '▶' : '✦'}</span>
                )}
                <div className="business-card-badges">
                  {business.featured && <b>Featured</b>}
                  {business.verified && <b>✓ Verified</b>}
                  {business.isDemo && <b>Preview</b>}
                </div>
              </a>
              <div className="business-card-body">
                <div className="business-card-meta">
                  <span>{getBusinessProfileType(business)}</span>
                  <span>{business.location}, {business.market}</span>
                </div>
                <h2><a href={`/business/${business.slug}`}>{business.name}</a></h2>
                <p>{business.summary}</p>
                <ul aria-label="Selected services">
                  {business.services.slice(0, 3).map((service) => <li key={service}>{service}</li>)}
                </ul>
                <div className="business-card-foot">
                  <small>{business.delivery ?? 'Contact provider'} · {(business.languages ?? ['English']).join(', ')}</small>
                  <a className="business-card-link" href={`/business/${business.slug}`}>
                    View profile <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="directory-empty">
          <span aria-hidden="true">⌕</span>
          <h2>No exact match yet</h2>
          <p>Try a broader service or clear the filters. The directory is growing as new profiles are reviewed.</p>
          <button className="button button-gold" type="button" onClick={resetFilters}>Show every profile</button>
        </div>
      )}
    </div>
  );
}
