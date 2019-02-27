const {minutes, seconds, miliseconds} = times

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        running = false,
        display = display,
        }
        this.print(this.times);
    }
    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        })
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

format() {
        this.times(pad0) = {
            minutes,
            seconds,
            miliseconds,
        };
    }

start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
calculate() {
        this.state.times = {
            miliseconds = +1;
            if (this.miliseconds >= 100) {
                seconds = +1,
                    miliseconds = 0;
            }
            if (this.times.seconds >= 60) {
                minutes = +1,
                    seconds = 0,
            }
        }
    }
stop() {
        this.running = false;
        clearInterval(this.watch);
    }

}

// const stopwatch = new Stopwatch(
//     document.querySelector('.stopwatch'));

// let startButton = document.getElementById('start');
// startButton.addEventListener('click', () => stopwatch.start());

// let stopButton = document.getElementById('stop');
// stopButton.addEventListener('click', () => stopwatch.stop());

render ();{
return {
    <nav className={"controls"}>
    <a className={"button"} href={"#"} id={"start"} onClick={() => this.start()} </a>
    <a className={"button"} href={"#"} id={"stop"} onClick={() => this.stop()} </a>
    </nav>
    <div className={"stopwatch"} </div>
}
}

//Funkcja pad0 przyjmuje na wejście wartość liczbową, przekształca ją na stringa, a następnie sprawdza czy długość tego przekształcenia jest mniejsza od 2 dodając tym samym zero przed tę liczbę.
function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}