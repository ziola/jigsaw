import React, { Component } from 'react';

import './Intro.css';

export default class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleScores = this.handleScores.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleStart() {
        this.props.onStart(this.state.name);
    }

    handleScores() {
        this.props.onScores();
    }

    render() {
        const { name } = this.state;

        return (
            <div className="intro">
                <p>Welcome to JIGSAW</p>
                <p>Input your name to start:</p>
                <input
                    type="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Name" />
                <button
                    type="button"
                    onClick={this.handleStart}
                    disabled={!name} >
                    Play
                </button>
                <button
                    type="button"
                    onClick={this.handleScores}>
                    See scores
                </button>
            </div>
        );
    }
}