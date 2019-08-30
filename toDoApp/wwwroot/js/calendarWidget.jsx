class CalendarTable extends React.Component {
    state = {
        dateObject: moment(),
        showMonthTable: false,
        showYearTable: false,
        displayMode: true, // true - month mode, false - day mode
        showDefaultTable: true,
        monthList: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        yearList: [],
        yearListLastActualised: 0
    }

    CalendarDaySquare = props => {
        let isToday = (props.value == this.currDay() && this.currMonth() == this.chosenMonth() && this.currYear() == this.chosenYear());
        let value = "", className = "calendarDaySquare";
        if (isNaN(props.value)) {
            className = "calendarWeekHeaders";
            value = props.value;
        } else if (props.value) {
            value = props.value;
            className += " filledDaySquare";
            if (isToday) {
                className += " today";
            }
            return (
                <div className={className} onClick={e => { this.setDay(value); this.changeMode(); }}> {value} </div>
            );
        }
        return (
            <div className={className}> {value} </div>
        );
    }

    previousMonth = () => {
        if (this.chosenMonth() == this.state.monthList[0])
            this.setYear(parseInt(this.chosenYear()) - 1);
        this.setMonth(this.state.monthList[(this.state.monthList.indexOf(this.chosenMonth()) + 11) % 12]);
    }

    nextMonth = () => {
        this.setMonth(this.state.monthList[(this.state.monthList.indexOf(this.chosenMonth()) + 1) % 12]);
        if (this.chosenMonth() == this.state.monthList[0]) {
            this.setYear(parseInt(this.chosenYear()) + 1); 
        }
    }

    previousDay = () => {
        let previousDay = this.chosenDay() - 1;
        if (!previousDay) { // if it is equal to 0
            this.previousMonth();
            this.setDay(this.daysInMonth());
        } else {
            this.setDay(previousDay);
        }
    }

    nextDay = () => {
        let day = (this.chosenDay() + 1) % (this.daysInMonth() + 1);
        if (day == 0) {
            day = 1;
            this.nextMonth();
        }
        this.setDay(day);
    }

    CalendarHeader = () => {
        if (!this.state.displayMode) {
            return (
                <div className="calendarWidgetHeaderDayMode">
                    <div className="calendarHeaderLeftArrow" onClick={e => { this.previousDay(); }}><img src="./img/leftArrow.png" /></div>
                    <div className="dayHeader" onClick={e => { this.changeMode(); }}> {this.chosenDay()}</div>
                    <div className="monthHeader" onClick={e => { this.showMonthTable(); }}>{this.chosenMonth()}</div >
                    <div className="yearHeader" onClick={e => { this.showYearTable(); }} > {this.chosenYear()} </div>
                    <div className="calendarHeaderRightArrow" onClick={e => { this.nextDay(); }} > <img src="./img/rightArrow.png" /></div>
                </div>
            );
        } else {
            return (
                <div className="calendarWidgetHeaderMonthMode">
                    <div className="calendarHeaderLeftArrow" onClick={e => { this.previousMonth(); }}><img src="./img/leftArrow.png" /></div>
                    <div className="monthHeader" onClick={e => { this.showMonthTable(); }}>{this.chosenMonth()}</div >
                    <div className="yearHeader" onClick={e => { this.showYearTable(); }}> {this.chosenYear()} </div>
                    <div className="calendarHeaderRightArrow" onClick={e => { this.nextMonth(); }}><img src="./img/rightArrow.png" /></div>
                </div>
            );
        }
    }

    CalendarMonthList = () => {

        return (
            <div className="calendarMonthList">
                {this.state.monthList.map((month, i) => {
                    let currMonthClass = "";
                    if (this.currYear() == this.chosenYear() && this.currMonth() == month) {
                        currMonthClass = " currMonth";
                    }
                    return <div key={i} className={month + "Month" + currMonthClass} onClick={e => { this.setMonth(month); }}>{month}</div>
                })}
                }
            </div>
            );
    }

    changeMode = () => {
        this.setState({
            displayMode: !this.state.displayMode,
            showMonthTable: false,
            showYearTable: false,
            showDefaultTable: true
        });
    }

    setMonth = month => {
        this.setState({
            dateObject: this.state.dateObject.month(month),
            showMonthTable: false,
            showDefaultTable: true
        })
    }

    showMonthTable = (e) => {
        this.setState({
            showYearTable: false,
            showDefaultTable: (this.state.showMonthTable) ? true : false,
            showMonthTable: !this.state.showMonthTable

        })
    };

    setDay = day => {
        this.setState({
            dateObject: this.state.dateObject.date(day)
        });
    }

    setYear = year => {
        this.setState({
            dateObject: this.state.dateObject.year(year),
            showYearTable: false,
            showDefaultTable: true
        })
    }

    showYearTable = (e) => {
        this.setState({
            showMonthTable: false,
            showDefaultTable: (this.state.showYearTable) ? true : false,
            showYearTable: !this.state.showYearTable
        })
    }

    setYearList = () => {
        if (this.state.yearListLastActualised != this.currYear()) {
            let yearList = [];
            for (let i = parseInt(this.currYear()) - 6; i < parseInt(this.currYear()) + 30; ++i) {
                yearList.push(i);
            }
            this.setState({
                yearList: yearList,
                yearListLastActualised: this.currYear()
            })
        }
    }

    CalendarYearList = () => {
        this.setYearList();
        let yearList = this.state.yearList;
        return (
            <div className="calendarYearList">
                {yearList.map((year, i) => {
                    let currYearClass = "";
                    if (this.currYear() == year) {
                        currYearClass = " currYear";
                    }

                    return <div key={i} className={"year" + currYearClass}  onClick={e => { this.setYear(year); }}>{year}</div>
                })}
            </div>
        );
    }

    currDay = () => {
        return moment().date();
    };

    currMonth = () => {
        return moment().format("MMMM");
    };

    currYear = () => {
        return moment().format("YYYY");
    }

    chosenDay = () => {
        return this.state.dateObject.date();
    };

    chosenMonth = () => {
        return this.state.dateObject.format("MMMM");
    };

    chosenYear = () => {
        return this.state.dateObject.format("YYYY");
    }

    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
    };

    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d");
        return firstDay;
    };

    locateDaysIntoWeeks = () => {
        let firstWeek = [];
        let secondWeek = [];
        let thirdWeek = [];
        let fourthWeek = [];
        let fifthWeek = [];
        let sixthWeek = [];
        let firstDayOfMonth = this.firstDayOfMonth();
        if (firstDayOfMonth == 0) {
            firstDayOfMonth = 7;
        }
        for (let i = 0; i < firstDayOfMonth - 1; ++i) {
            firstWeek.push(0);
        }
        let j = 1;

        for (; firstWeek.length < 7; ++j) {
            firstWeek.push(j);
        }
        for (; secondWeek.length < 7; ++j) {
            secondWeek.push(j);
        }
        for (; thirdWeek.length < 7; ++j) {
            thirdWeek.push(j);
        }
        for (; j <= this.daysInMonth() && fourthWeek.length < 7; ++j) {
            fourthWeek.push(j);
        }
        for (; j <= this.daysInMonth() && fifthWeek.length < 7; ++j) {
            fifthWeek.push(j);
        }
        for (; fifthWeek.length < 7;++j) {
            fifthWeek.push(0);
        }

        for (; j <= this.daysInMonth(); ++j) {
            sixthWeek.push(j);
        }

        for (; sixthWeek.length < 7;) {
            sixthWeek.push(0);
        }
        return [firstWeek, secondWeek, thirdWeek, fourthWeek, fifthWeek, sixthWeek];
    }

    renderDayMode() {

    }

    DayMode() {
        return (
            <div className="calendarDayTable">
            </div>
            );
    }

    MonthMode = () => {
        let weekHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let weeks = this.locateDaysIntoWeeks();

        return (
            <div className="calendarTable">
                <div className="calendarWeekHeader">
                    {weekHeaders.map((object, i) => <this.CalendarDaySquare value={object} key={i} />)}
                </div>
                <div className="calendarWeeks">
                    {weeks[0].map((object, i) => <this.CalendarDaySquare value={object} key={i} />)}

                </div>
                <div className="calendarWeeks">
                    {weeks[1].map((object, i) => <this.CalendarDaySquare value={object} key={i} />)}
                </div>
                <div className="calendarWeeks">
                    {weeks[2].map((object, i) => <this.CalendarDaySquare value={object} key={i} />)}
                </div>
                <div className="calendarWeeks">
                    {weeks[3].map((object, i) => <this.CalendarDaySquare value={object} key={i} />)}
                </div>
                <div className="calendarWeeks">
                    {weeks[4].map((object, i) => <this.CalendarDaySquare value={object} key={i} />)}
                </div>
                <div className="calendarWeeks">
                    {weeks[5].map((object, i) => <this.CalendarDaySquare value={object} key={i} />)}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="calendarWidget">

                <div className="calendarHeader">
                    <this.CalendarHeader />
                </div>
                {this.state.showMonthTable && (<this.CalendarMonthList />)}
                {this.state.showYearTable && (<this.CalendarYearList />)}
                {this.state.showDefaultTable && ((this.state.displayMode) ? <this.MonthMode /> : <this.DayMode />)}
            </div>
        );
        //if (this.props.displayMode) {
        //    return this.renderDayMode();
        //} else {
        //    return this.renderMonthMode();
        //}
        
    }
}

class Calendar extends React.Component {
    displayMode = 0; // 0 - month display, 1 - day display

    render() {
        return (
                <CalendarTable displayMode={this.displayMode} />
        );
    }
}

// ========================================

function App() {
    return <Calendar />;
}

const rootElement = document.getElementById("calendar");
ReactDOM.render(
    <App />, rootElement
);
