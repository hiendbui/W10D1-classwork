import React, { Component } from 'react';

export default class Weather extends Component {
    constructor (props) {
        super(props);
        this.state = { position: null }
    }
    // 7de803de2109e2485c875847052050cd
    // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    fetchWeather() {
        const xhReq = new XMLHttpRequest();
        const apiKey = "7de803de2109e2485c875847052050cd";
        const lat = this.state.position.coords.latitude;
        const lon = this.state.position.coords.longitude;
        xhReq.open(
            "GET",
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`,
            true
        );
        xhReq.send(null);
        const serverResponse = xhReq.responseText;
        setTimeout(() => console.log(xhReq.response.json()), 2000);
    }

    setPosition(geo) {
        this.setState({position: geo}, this.fetchWeather.bind(this));
        // console.log(this.state.position);
        // const [latitude, longitude] = this.state.position.coords;
        // console.log(this.state.position.coords.latitude);
    }

    componentDidMount() {
        let geo = navigator.geolocation;
        geo.getCurrentPosition((res) => {
            this.setPosition(res);
            console.log("this ran");
        }, err => console.log(err));
    }
    
    render() {
        return (
            <div className="weather">

                {!this.state.position && <p>Loading...</p>}
            </div>
        )
    }
}