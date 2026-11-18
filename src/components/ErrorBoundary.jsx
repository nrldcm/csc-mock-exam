import { Component } from 'react'

/* If a screen crashes, show a friendly recovery screen instead of a blank page.
   Progress is safe: everything is already saved on the device. */
export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(error) { return { error } }
  componentDidCatch(error, info) { console.error('Screen crashed:', error, info?.componentStack) }
  render() {
    if (!this.state.error) return this.props.children
    return (
      <main className="wrap" role="alert" style={{ paddingTop: 40 }}>
        <div className="card">
          <h2>Something went wrong on this screen</h2>
          <p className="sub">Your sessions and progress are saved on this device. Go back to the home screen and try again.</p>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '.8rem', color: 'var(--muted)', background: 'var(--paper)', padding: 10, borderRadius: 8 }}>{String(this.state.error?.message || this.state.error)}</pre>
          <div className="stack">
            <button className="btn block" onClick={() => { this.setState({ error: null }); this.props.onReset?.() }}>Back to home</button>
          </div>
        </div>
      </main>
    )
  }
}
