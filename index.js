// Your code here
function createEmployeeRecord(personaldetails){
    const employeeRecord = {}
    employeeRecord.firstName = personaldetails[0]
    employeeRecord.familyName = personaldetails[1]
    employeeRecord.title = personaldetails[2]
    employeeRecord.payPerHour = personaldetails[3]
    employeeRecord.timeInEvents = []
    employeeRecord.timeOutEvents = []

    return employeeRecord
}

function createEmployeeRecords(employeeInfo){
    return employeeInfo.map(createEmployeeRecord)
}

function createTimeInEvent(employeeRecord, date){
    let eventIn = {}

    let fulldate = date.slice(0, date.length -4).trim()
    let time = parseInt(date.slice(date.length-4), 10)
    eventIn.type = "TimeIn"
    eventIn.hour = time
    eventIn.date = fulldate
    employeeRecord.timeInEvents[0] = eventIn

    return employeeRecord
}

function createTimeOutEvent(employeeRecord, date){
    let eventOut = {}
    eventOut.type = "TimeOut"
    eventOut.hour = parseInt(date.slice(-4), 10)
    eventOut.date = date.slice(0, -4).trim()
    employeeRecord.timeOutEvents[0] = eventOut
    
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){
    let result
    if(date == employeeRecord.timeInEvents[0].date && date == employeeRecord.timeOutEvents[0].date){
        result =  (employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour)/100
        return result
    }
}

function wagesEarnedOnDate(employeeRecord, date){
    let hours = hoursWorkedOnDate(employeeRecord, date)
    return (hours * parseInt(employeeRecord.payPerHour, 10))
}

function allWagesFor(employeeRecord){
    let array = employeeRecord.timeInEvents
    let wages = array.map((element) => {
        return wagesEarnedOnDate(employeeRecord, element.date)
    })
    let total = wages.reduce((accu, value) => accu += value)
    return total
}