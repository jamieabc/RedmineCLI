var redmine = require('../module/redmine.js');
var printer = require('../module/printer.js');
var filter = require('./filter.js');

exports.handleConnect = function(url, apiKey){
  try{
    var user = redmine.connect(url, apiKey);
    printer.printSuccessfullyConnected(url, user);
  } catch(err){console.error(err)}
}

exports.handleProjects = function(){
  try{
    var projects = redmine.getProjects();
    printer.printProjects(projects);
  } catch(err){console.error(err)}
}

exports.handleProject = function(identifier){
  try{
    var project = redmine.getProject(identifier);
    var roles = redmine.getProjectMembershipsGroupedByRole(identifier);

    project.roles = roles;

    printer.printProject(project);
  } catch(err){console.error(err)}
}

exports.handleIssues = function(options){
  try{
    var filters = filter.issuesFiltersFrom(options);
    var issues = redmine.getIssues(filters);
    printer.printIssues(issues);
  } catch(err){console.error(err)}
}

exports.handleIssue = function(id){
  try{
    var issue = redmine.getIssue(id);
    printer.printIssue(issue.issue);
  } catch(err){console.error(err)}
}

exports.handleStatuses = function(options){
  try{
    var statuses = redmine.getStatuses();
    printer.printStatuses(statuses);
  } catch(err){console.error(err)}
}

exports.handleTrackers = function(options){
  try{
    var trackers = redmine.getTrackers();
    printer.printTrackers(trackers);
  } catch(err){console.error(err)}
}

exports.handlePriorities = function(options){
  try{
    var priorities = redmine.getPriorities();
    printer.printPriorities(priorities);
  } catch(err){console.error(err)}
}

exports.handleOpen = function(id){
  try{
    redmine.open(id);
  } catch(err){console.error(err)}
}
