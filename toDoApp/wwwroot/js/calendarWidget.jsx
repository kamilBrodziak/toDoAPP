
//class CalendarHeaderLeftArrow extends React.Component {
//    render() {
//        return (<div className="calendarHeaderLeftArrow"> LeftArrow </div>);
//    }
//}
//class CalendarHeaderDay extends React.Component {
//    render() {
//        return (<div className="dayHeader"> {this.props.day}</div>);
//    }
//}

//class CalendarHeaderMonth extends React.Component {


//    render() {
//        return (<div className="monthHeader" >
//            {this.props.month}
//        </div >);
//    }

//}
//class CalendarHeaderYear extends React.Component {
//    render() {
//        return (<div className="yearHeader"> {this.props.year} </div>);
//    }
//}
//class CalendarHeaderRightArrow extends React.Component {
//    render() {
//        return (<div className="calendarHeaderRightArrow"> LeftArrow </div>);
//    }
//}

//class CalendarHeader extends React.Component {
//    render() {
//        if (this.props.displayMode) {
//            return (
//                <div className="calendarWidgetHeaderDayMode">
//                    <CalendarHeaderLeftArrow />
//                    <CalendarHeaderDay day={this.props.day}/>
//                    <CalendarHeaderMonth month={this.props.month}/>
//                    <CalendarHeaderYear year={this.props.year}/>
//                    <CalendarHeaderRightArrow />
//                </div>
//            );
//        } else {
//            return (
//                <div className="calendarWidgetHeaderMonthMode">
//                    <CalendarHeaderLeftArrow />
//                    <CalendarHeaderMonth month={this.props.month}/>
//                    <CalendarHeaderYear year={this.props.year}/>
//                    <CalendarHeaderRightArrow />
//                </div>
//            );
//        }
//    }
//}

//class CalendarDaySquare extends React.Component {
//    isToday = (day) => {
//        return day == this.props.today; 
//    }

//    render() {
//        let value = "", className = "calendarDaySquare";
//        if (isNaN(this.props.value)) {
//            className = "calendarWeekHeaders";
//            value = this.props.value;
//        } else if (this.props.value) {
//            value = this.props.value;
//            className += " filledDaySquare";
//            if (this.isToday(this.props.value)) {
//                className += " today";
//            }
//        }
//        return (
//            <div className={className}> {value} </div>    
//        );
//    }
//}


//class CalendarHeaderMonthList extends React.Component {
//    render() {
//        let months = moment.months();
//        {
//            this.state.showMonthTable &&
//                < this.CalendarHeaderMonthList months={moment.months()} />
//        }
//        return (
//            {
//                months.map((object, i) =>
//                    <div>

//                    </div>)
//            }
//        );
//    }
//}

class CalendarTable extends React.Component {
    state = {
        dateObject: moment(),
        allMonths: moment.months(),
        showMonthTable: false,
        showYearTable: false
    }

    CalendarDaySquare = props => {
        let isToday = (props.value == props.today);
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
        }
        return (
            <div className={className}> {value} </div>
        );
    }

    CalendarHeader = props => {
        if (props.displayMode) {
            return (
                <div className="calendarWidgetHeaderDayMode">
                    <div className="calendarHeaderLeftArrow"> LeftArrow </div>
                    <div className="dayHeader"> {props.day}</div>
                    <div className="monthHeader" >{props.month}</div >
                    <div className="yearHeader"> {props.year} </div>
                    <div className="calendarHeaderRightArrow"> LeftArrow </div>
                </div>
            );
        } else {
            return (
                <div className="calendarWidgetHeaderMonthMode">
                    <div className="calendarHeaderLeftArrow"> LeftArrow </div>
                    <div className="monthHeader" >{props.month}</div >
                    <div className="yearHeader"> {props.year} </div>
                    <div className="calendarHeaderRightArrow"> LeftArrow </div>
                </div>
            );
        }
    }

    showMonthTable = (e, month) => {
        if (!this.state.showMonthTable && showYearTable) {
            this.setState({
                showYearTable: false
            });
        }
        this.setState({
            showMonthTable: !this.state.showMonthTable,
        });
    };

    currDay = () => {
        return this.state.dateObject.format("D");
    };

    currMonth = () => {
        return this.state.dateObject.format("MMMM");
    };

    currYear = () => {
        return this.state.dateObject.format("YYYY");
    }

    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
    };

    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d"); // Day of week 0...1..5...6
        return firstDay;
    };

    locateDaysIntoWeeks = () => {
        let firstWeek = [];
        let secondWeek = [];
        let thirdWeek = [];
        let fourthWeek = [];
        let fifthWeek = [];
        for (let i = 0; i < this.firstDayOfMonth() - 1; ++i) {
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
        for (; j <= this.daysInMonth(); ++j) {
            fifthWeek.push(j);
        }
        for (; fifthWeek.length < 7;) {
            fifthWeek.push(0);
        }
        return [firstWeek, secondWeek, thirdWeek, fourthWeek, fifthWeek];
    }

    renderDayMode() {

    }

    renderMonthTable() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    }

    renderMonthMode() {
        let weekHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let weeks = this.locateDaysIntoWeeks();

        return (
            <div className="calendarWidget">
                <div className="calendarHeader">
                    <this.CalendarHeader day={this.currDay()} month={this.currMonth()} year={this.currYear()} />
                </div>
                <div className="calendarTable">
                    <div className="calendarWeekHeader">
                        {weekHeaders.map((object, i) => <this.CalendarDaySquare value={object} key={i} today={this.currDay()} />)}
                    </div>
                    <div className="calendarWeeks">
                        {weeks[0].map((object, i) => <this.CalendarDaySquare value={object} key={i} today={this.currDay()} />)}

                    </div>
                    <div className="calendarWeeks">
                        {weeks[1].map((object, i) => <this.CalendarDaySquare value={object} key={i} today={this.currDay()} />)}
                    </div>
                    <div className="calendarWeeks">
                        {weeks[2].map((object, i) => <this.CalendarDaySquare value={object} key={i} today={this.currDay()} />)}
                    </div>
                    <div className="calendarWeeks">
                        {weeks[3].map((object, i) => <this.CalendarDaySquare value={object} key={i} today={this.currDay()} />)}
                    </div>
                    <div className="calendarWeeks">
                        {weeks[4].map((object, i) => <this.CalendarDaySquare value={object} key={i} today={this.currDay()} />)}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.displayMode) {
            return this.renderDayMode();
        } else {
            return this.renderMonthMode();
        }
        
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
ReactDOM.render(
    <Calendar />,
    document.getElementById('calendar')
);
