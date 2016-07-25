/**
*TEST Gianni
*MODIF Simon
* create event in calendar defined by calendarId
*
*<pre>
*  var eventId = calendarCreateEvent('kll7eutkrkfvsg7pnbsuh5u46g@group.calendar.google.com', 'ma session de formation', daySession,hStart,daySession,hEnd);
*</pre>
* @param  {string} calendarId calendar Id
* @param  {string} title Title of the event
* @param  {date} dayStart day for start event
* @param  {date} hoursStart day for start event
* @param  {date} dayEnd day for end  event
* @param  {date} hoursEnd day for start event
* @return {string} Id of the event, stored to be reused later (for instance : to add users)
* author : xavier Philippe
* approver : 
* date : 
*/
function calendarCreateEvent(calendarId,title,dayStart,hourStart,dayEnd, hourEnd){
  logWriteLogSystemSpreadsheet_( 'Info',  'Start', 'calendarCreateEvent' );
  try{
    var calendar = CalendarApp.getCalendarById(calendarId);
    var options = {sendInvites: true};
    var start = toolsJoinDateAndTime(dayStart,hourStart);
    var end = toolsJoinDateAndTime(dayEnd,hourEnd);
    var event = calendar.createEvent(title, start, end, options).setGuestsCanSeeGuests(true);
  } catch(e) {
    Browser.msgBox('Error in calendarCreateEvent : ' + e.message );
    logWriteLogSystemSpreadsheet_( 'Error',  e.message, 'calendarCreateEvent' );
    return null;
  }
  logWriteLogSystemSpreadsheet_( 'Info',  'End', 'calendarCreateEvent' );
  return event.getId();
}
