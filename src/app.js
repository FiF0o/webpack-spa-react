import React from 'react'
import D3Component from './d3-component'
import './app.css'

class App extends React.Component {
	constructor() {
		super()
	}
	
	render() {
		// Beware that when using D3Component the parent container
		// is the one dictating the size
	    return (
		    <div className='app'>
		    	<D3Component />
		    </div>
	    )
	}	
}

export default App