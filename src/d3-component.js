import './d3-component.css'
import React from 'react'
import d3 from 'd3'

class D3Component extends React.Component {
	constructor() {
		super()

		this.state = {
		}

		this.d3Width = 0
		this.d3Height = 0

		// Store the ref so we can detach it on unmount
		this.handleResizeBound = this.handleResize.bind(this)
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResizeBound)
		this.setupVisualisation()
		this.handleResize()
		// Request the data here
	}

	componentWillMount() {
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResizeBound)
		// Any d3 clean up do it here
	}

	componentWillReceiveProps(nextProps) {
	}

	// Initial setup
	setupVisualisation() {
		// Setup some basic stuff that won't be changing due to resize
		// data updates, eg maybe x/y scales, references, zoom handlers, etc
	}

	// Redraw/update vis due to new date being received
	processData(data) {
		// d3 enter/update/exit
	}

	// Redraw/update vis due to resize
	resizeVisualisation() {
		// You can have min height/width via the CSS which will
		// override these
		this.refs.d3svg.style.width = this.d3Width
		this.refs.d3svg.style.height = this.d3Height

		// d3 update
	}

	render() {
		return (
			<div className='d3-component' ref='d3Area'>
				<svg className='d3-svg' ref='d3svg'></svg>
			</div>
		)
	}

	handleResize(event) {
		// When resizing store the current size of the area containing the SVG.
		// We can then scale it when d3 runs
		this.d3Width = this.refs.d3Area.clientWidth
		this.d3Height = this.refs.d3Area.clientHeight
		this.resizeVisualisation()
	}
}

export default D3Component
