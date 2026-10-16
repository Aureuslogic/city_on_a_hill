'use client';

import { useMemo, useState } from 'react';
import { ecosystemEvents, eventFocuses, eventFormats, eventMarkets } from '../../lib/events';

export default function EventsClient() {
  const [query, setQuery] = useState('');
  const [format, setFormat] = useState('All formats');
  const [market, setMarket] = useState('All countries and regions');
  const [focus, setFocus] = useState('All themes');

  const filteredEvents = useMemo(() => {
    const needle = query.toLowerCase().trim();
    return ecosystemEvents.filter((event) => {
      const searchable = [event.title, event.city, event.market, event.focus, event.audience, event.summary, event.dateLabel, event.host, event.time].join(' ').toLowerCase();
      return (!needle || searchable.includes(needle)) &&
        (format === 'All formats' || event.format === format) &&
        (market === 'All countries and regions' || event.market === market) &&
        (focus === 'All themes' || event.focus === focus);
    });
  }, [focus, format, market, query]);

  const reset = () => {
    setQuery('');
    setFormat('All formats');
    setMarket('All countries and regions');
    setFocus('All themes');
  };

  return (
    <div className="events-browser">
      <form className="events-filter-panel" onSubmit={(event) => event.preventDefault()}>
        <label className="events-search">
          Search events
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by event, audience, city or country…"
          />
        </label>
        <label>
          Format
          <select value={format} onChange={(event) => setFormat(event.target.value)}>
            <option>All formats</option>
            {eventFormats.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Country or region
          <select value={market} onChange={(event) => setMarket(event.target.value)}>
            <option>All countries and regions</option>
            {eventMarkets.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Theme
          <select value={focus} onChange={(event) => setFocus(event.target.value)}>
            <option>All themes</option>
            {eventFocuses.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </form>

      <div className="events-results">
        <p aria-live="polite"><strong>{filteredEvents.length}</strong> programme {filteredEvents.length === 1 ? 'preview' : 'previews'}</p>
        {(query || format !== 'All formats' || market !== 'All countries and regions' || focus !== 'All themes') && (
          <button type="button" onClick={reset}>Clear filters</button>
        )}
      </div>

      {filteredEvents.length ? (
        <div className="event-card-grid">
          {filteredEvents.map((event) => (
            <article className="event-card" key={event.slug}>
              <div className="event-card-image">
                <img src={event.image} alt="" />
                <span>{event.dateLabel ?? 'Programme preview'}</span>
              </div>
              <div className="event-card-body">
                <div className="event-card-meta"><span>{event.format}</span><span>{event.time ? `${event.time} · ` : ''}{event.city}</span></div>
                <p className="kicker">{event.focus}</p>
                <h2>{event.title}</h2>
                <p>{event.summary}</p>
                <small>{event.host ? event.host : `For ${event.audience}`}</small>
                {event.registrationUrl ? (
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">Join <span>→</span></a>
                ) : event.dateLabel ? (
                  <small>Join link coming</small>
                ) : (
                  <a href={`mailto:info@cityonthehillglobal.com?subject=${encodeURIComponent(`Register interest: ${event.title}`)}`}>
                    Register interest <span>→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="directory-empty">
          <span aria-hidden="true">◇</span>
          <h2>No matching programme preview</h2>
          <p>Clear the filters to explore every event format currently planned for the ecosystem.</p>
          <button className="button button-gold" type="button" onClick={reset}>Show every event</button>
        </div>
      )}
    </div>
  );
}

