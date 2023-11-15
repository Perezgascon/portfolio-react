import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import "./styles.css"

export default function App() {
    return (
        <div>
            <Header />
            <Section 
                name="About Me"
                content="I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application"
            />
            <Section 
                name="Contact me"
                content="Email: sample_john_smith@mail.com | LinkedIn: https://www.linkedin.com/"
            />
        </div>
    )
}
