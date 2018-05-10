//Javascript file/class for Family Feud game
//Handles the page set up and data transfer
//Variables
var answers = [document.getElementById('0'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3'),
				document.getElementById('4'), document.getElementById('5'), document.getElementById('6'), document.getElementById('7')];

var questionDTitle = ['Name the benefits of using Sharepoint',
						'Name the Robins Sharepoint Team',
						'Name the Jobs of a SharePoint Team Member',
						'Name the ITSM team\'s functions',
						'Name the Assets ITSM manages',
						'Name the Modules within ITSM system',
						'Name the Benefits of using AIT',
						'Name Services the AIT team provides',
						'Name AFSC locations that utilize AFGET'
];

var questionLTitle = ['Name the Systems in DMSI - Depot Maintenance System Integration',
						 'DMAPS - Depot Maintenance and Production System Support what Business Mission Areas?',
						 'Name the Legacy Supply Systems',
						 'Name the Main Transactions processed by D035 Legacy Systems',
						 'Name the SCPL OPRs for the Legacy Supply Systems',
						 'Name the Functions of the Express System',
						 'What does the SCPL ISSM do?',
						 'What are the systems in EMIS suite of systems?'
];

var questionTTitle = ['Name the areas of support that SCPT provides to its customers',
						'Name the Window Platform Technologies and Tools employed by SCPT',
						'Name the Program Managers for SCPT applications',
						'Name the applications highlighted in the SCPT Overview'
];

var answerDArray = [
						['Shared Data', 'Version Control', 'Reduction in Emails', 'Coordination of Meetings', 'Search Capabilities', 'Organization Information Flow'],
						['Marco Dy-Rivera', 'Cynthia Hughes', 'Syemeiko Johnston', 'Tim Larsen', 'Dusty Martin', 'Mark Masten', 'Denise Sappe'],
						['Monitor Sites', 'Site Owner Training', 'Technical Support', 'Recovery', 'New Site Collections', 'Custom Designs', 'Customized Tools and Solutions', 'Migrations'],
						['Develop Service Requests', 'Develop Templates', 'ITSM User Support', 'Create Reports', 'Create Metrics', 'Accounts/Groups Management', 'User Training'],
						['Desktops/Laptops', 'Printers/MFDs', 'iPhones', 'Monitors', 'External Hard Drives', 'eTools', 'VolP Phones'],
						['Incident', 'Work Order', 'Asset', 'Change', 'Release', 'Problem', 'Knowledge', 'Purchasing', 'Receiving', 'Service Request Manager', 'Service Level Manager', 'Approvals'],
						['Automated Inventory', 'Asset Location/Visibility', 'Asset Accountability', 'Asset Security', 'Cost Savings/Manpower Reduction', 'Ease of Use'],
						['Program Management Office', 'Repair/Replace Hardware', 'Modernize Software', 'Correct Software Deficiencies', 'Meet Customer Requirements', 'Certification and Accreditation', 'Modernize Infrastructure', 'Helpdesk Support'],
						['Robins', 'Tinker', 'Hill', 'Randolph', 'Davis Monthan']
];

var answerLArray = [
						['G005M', 'EPS', 'ITS', 'G004L', 'E046B', 'PDMSS', 'Q302'],
						['Material', 'Financial', 'Production', 'Integration Engine', 'DDS - DMAPS Data Store', 'Cognos'],
						['D035A', 'D035K', 'D035L', 'D035J', 'D035T'],
						['Compute Requirements', 'Customer Balance', 'Storage Balance', 'Inventory Adjustments', 'Maintains Accountable Records', 'Catalog Data', 'Management Control Data'],
						['Pam Shumate', 'Sandra Jackson', 'Anne Tucker', 'Sonya Gainer', 'Ron Jones', 'Ky Perry', 'Audrey Wooten', 'Mary Fransioli', 'Erin Brown'],
						['Items to Repair', 'Repair Priority', 'Resource Availability', 'Base Receiving', 'Funds For Repairs'],
						['Information Systems Security', 'C&A packages', 'Compliance with Cyber Security', 'Requirements', 'Software Testing'],
						['CCM', 'MWR', 'ROCIT', 'XXRCC', 'FOM', 'RIPL', 'MPCS']
];

var answerTArray = [
						['Software Development', 'Software Sustainment', 'Software Testing', 'Information Assurance', 'Program Management'],
						['ASP.NET', 'ColdFusion', 'Delphi', 'SQL Server', 'Oracle', 'Team Foundation Server', 'Fortify', 'AppScan'],
						['Juanita Griffin', 'Lavanda Harrison', 'Lisa Davis', 'Jimmy Brown', 'Troy Anderson'],
						['PAD - Profiles of the Air Force Depot', 'e2875', 'EIMC - Employee Information Management Center', 'Financial DB', 'C2ISR']
];

//- Command and Control, Intelligence, Surveillance, and Reconnaissance Maintenance Information System
var question = document.getElementById('question');
var answerArea = document.getElementById('AnswerArea');
var textAnswerArea = document.getElementById('TextAreaAnswer');

//Select lists
var SCPDqv = document.getElementById('SCPDSelect');
var SCPLqv = document.getElementById('SCPLSelect');
var SCPTqv = document.getElementById('SCPTSelect');

//Select Buttons
var SCPDbtn = document.getElementById('SCPDbtn');
var SCPLbtn = document.getElementById('SCPLbtn');
var SCPTbtn = document.getElementById('SCPTbtn');

//Answer Buttons
var SCPDans = document.getElementById('SCPDans');
var SCPLans = document.getElementById('SCPLans');
var SCPTans = document.getElementById('SCPTans');

//Functions
function GetVariable() {
    var url_string = window.location.href;
    return StripString(url_string);
}

function AdjustQuestion(index) {
    var ans, ques;

    switch (index[0]) {
        case 'D':

            if (index[1] < questionDTitle.length) {
                ques = questionDTitle[index[1]];
            }
            ans = answerDArray[index[1]];
            break;
        case 'L':

            if (index[1] < questionLTitle.length) {
                ques = questionLTitle[index[1]];
            }
            ans = answerLArray[index[1]];
            break;
        case 'T':

            if (index[1] < questionTTitle.length) {
                ques = questionTTitle[index[1]];
            }
            ans = answerTArray[index[1]];
            break;
        default:
            break;
    }

    question.innerHTML = CreateQuestionTitle(ques, ans.length);

    for (i = 0; i < ans.length; i++) {

        if (i < answers.length) {
            answers[i].innerHTML = ans[i];
        }
    }
}

function CreateQuestionTitle(ques, nOaS) {
    var results = 'Top ';

    if (parseInt(nOaS) <= 8) {
        results += nOaS;
    }
    else {
        results += 8;
    }
    results += ' answers';
    results += '<br/>'
    return results + ques;
}

function StripString(href) {
    var url_split = href.split("=");
    var end = url_split.length - 1;
    var type = url_split[end].replace(/[^A-Z]/g, '').replace(/\s+/g, '');
    var index = url_split[end - 1].replace(/\D/g, '');

    var result = [type, index];

    if (index === '' || type === '') {
        return answerArray.length;
    }
    else {
        return result;
    }
}

function CreateAnswerList(index) {
    var array;

    switch (index[0]) {
        case 'D':
            array = answerDArray[index[1]];
            break;
        case 'L':
            array = answerLArray[index[1]];
            break;
        case 'T':
            array = answerTArray[index[1]];
            break;
        default:
            break;
    }

    var results = '';

    for (i = 0; i < array.length; i++) {

        if (i == 0) {
            results = parseInt(i+1) + '. ' + array[i];
        }
        else {
	    results = results + '\n' + parseInt(i+1) + '. ' + array[i];
        }
    }

    return results;
}

function DisplayAnswer(href) {
    answerArea.style.display = 'block';
    textAnswerArea.innerHTML = CreateAnswerList(StripString(href));
}

switch (document.title) {
    case 'Welcome':
        SCPDbtn.addEventListener("click", function () {
            var href = SCPDqv.options[SCPDqv.selectedIndex].value + '&type=D';
            window.open(href, "_blank");
            DisplayAnswer(href);
        });

        SCPLbtn.addEventListener("click", function () {
            var href = SCPLqv.options[SCPLqv.selectedIndex].value + '&type=L';
            window.open(href, "_blank");
            DisplayAnswer(href);
        });

        SCPTbtn.addEventListener("click", function () {
            var href = SCPTqv.options[SCPTqv.selectedIndex].value + '&type=T';
            window.open(href, "_blank");
            DisplayAnswer(href);
        });

        SCPDans.addEventListener("click", function () {
            var href = SCPDqv.options[SCPDqv.selectedIndex].value + '&type=D';
            DisplayAnswer(href);
        });

        SCPLans.addEventListener("click", function () {
            var href = SCPLqv.options[SCPLqv.selectedIndex].value + '&type=L';
            DisplayAnswer(href);
        });

        SCPTans.addEventListener("click", function () {
            var href = SCPTqv.options[SCPTqv.selectedIndex].value + '&type=T';
            DisplayAnswer(href);
        });

        break;
    case 'Question':
        AdjustQuestion(GetVariable());
        break;
    default:
        break;
}