function result() {
    const url = "https://baas.kinvey.com/appdata/kid_BJe588Szx/football-matches";
    const headers = {
        "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q=",
        "Content-Type": "application/json"
    };
    const headBets = ['Home Team', 'Away Team', 'Start', 'Bet On', 'Ratio', 'Value', 'Estimated Winnings'];
    const headMatch = ['Id', 'Home Team', 'Away Team', 'Start', 'Win', 'Draw', 'Lose', 'Bet', 'Bet On', 'Submit'];

    let myBets = [];

    class BetsView extends React.Component {
        render() {
            return (
                <table>
                    <thead>
                    <tr>{headBets.map((e, i) => <th key={i}>{e}</th>)}</tr>
                    </thead>
                    <tbody>{
                        this.props.b.map((e, i) => {
                            return <tr key={i}>
                                <td>{e.homeTeam}</td>
                                <td>{e.awayTeam}</td>
                                <td>{e.time}</td>
                                <td>{e.betType}</td>
                                <td>{e.betRatio}</td>
                                <td>{e.betValue}</td>
                                <td>{e.estimatedWin}</td>
                            </tr>
                        })
                    }</tbody>
                </table>
            )
        }
    }

    class MatchesView extends React.Component {
        constructor() {
            super();
            this.mkm =
        }
        sortMatches(el1, el2) {
            let time1 = el1.time.split(" ")[0];
            let format1 = el1.time.split(" ")[1];

            let time2 = el2.time.split(" ")[0];
            let format2 = el2.time.split(" ")[1];

            let hour1 = Number(time1.split(":")[0]);
            let minutes1 = Number(time1.split(":")[1]);

            let hour2 = Number(time2.split(":")[0]);
            let minutes2 = Number(time2.split(":")[1]);

            let result = format1.localeCompare(format2);

            if (result == 0) result = hour1 - hour2;
            if (result == 0) result = minutes1 - minutes2;

            return result;
        }

        getBet(ev) {
            let currentId = Number($(ev.target).parent().attr('id').replace('match-', '').replace('-button', ''));
            let value = Number($('#match-' + currentId + '-bet input').val());
            let betType = $('#match-' + currentId + '-bet-type select option:selected').text().toString().toLowerCase();

            let ratio = Number($('#match-' + currentId + '-' + betType).text());

            let homeTeam = $('#match-' + currentId + '-home').text();
            let awayTeam = $('#match-' + currentId + '-away').text();
            let time = $('#match-' + currentId + '-time').text();

            let bet = {
                id: currentId,
                homeTeam: homeTeam,
                awayTeam: awayTeam,
                time: time,
                betType: betType,
                betRatio: ratio,
                betValue: value,
                estimatedWin: (ratio * value).toFixed(2)
            };

            myBets.push(bet);
            this.dedaznam();
        }

        dedaznam() {
            let self = this;

            let re = this.props.m
                .sort((el1, el2) => {this.sortMatches(el1, el2)})
                .map((e, i) => {
                    let boolBet = false;
                    myBets.forEach(function () {
                        if (myBet.id == e.id) boolBet = true;
                    });
                    return <tr key={i}>
                        <td id={"match-" + e.id}>{e.id}</td>
                        <td id={"match-" + e.id + "-home"}>{e.home}</td>
                        <td id={"match-" + e.id + "-away"}>{e.away}</td>
                        <td id={"match-" + e.id + "-time"}>{e.time}</td>
                        <td id={"match-" + e.id + "-win"}>{e.ratio["1"]}</td>
                        <td id={"match-" + e.id + "-draw"}>{e.ratio["x"]}</td>
                        <td id={"match-" + e.id + "-lose"}>{e.ratio["2"]}</td>
                        <td id={"match-" + e.id + "-bet"}>{
                            boolBet == true
                                ? <input type="number" disabled/>
                                : <input type="number" min="1" max="1000000"/>
                        }</td>
                        <td id={"match-" + e.id + "-bet-type"}>{
                            boolBet == true
                                ? <select disabled></select>
                                : <select>
                                <option>Win</option>
                                <option>Draw</option>
                                <option>Lose</option>
                            </select>
                        }</td>
                        <td id={"match-" + e.id + "-button"}>{
                            boolBet == true
                                ? <button disabled>Bet</button>
                                : <button onClick={self.getBet}>Bet</button>
                        }</td>
                    </tr>
                });
            return re;
        }

        render() {
            return (
                <table>
                    <thead>
                    <tr>{headMatch.map((e, i) => <th key={i}>{e}</th>)}</tr>
                    </thead>
                    <tbody>{
                        this.dedaznam()
                    }</tbody>
                </table>
            )
        }
    }

    class Header extends React.Component {
        render() {
            return (
                <header>
                    <div>Dollar Football</div>
                </header>
            )
        }
    }

    class Buttons extends React.Component {
        showBets() {
            ReactDOM.render(
                <BetsView b={myBets}/>,
                document.getElementsByClassName('content-holder')[0]
            )
        }

        showMatches() {
            $.ajax({
                method: 'GET',
                url: url,
                headers: headers
            })
                .then(function(result) {
                    ReactDOM.render(
                        <MatchesView m={result}/>,
                        document.getElementsByClassName('content-holder')[0]
                    )
                })
                .catch();
        }

        render() {
            return (
                <div className="button-holder">
                    <button onClick={this.showBets} className="button">My Bets</button>
                    <button onClick={this.showMatches} className="button">Matches</button>
                </div>
            )
        }
    }

    class Content extends React.Component {
        render() {
            return (
                <div className="content-holder">
                </div>
            )
        }
    }

    class Layout extends React.Component {
        render() {
            return (
                <div className="wrapper">
                    <Header/>
                    <Buttons/>
                    <Content/>
                </div>
            )
        }
    }
    return {Layout}
}

let emiii = result();

ReactDOM.render(
    <emiii.Layout/>,
    document.getElementById('app')
);

