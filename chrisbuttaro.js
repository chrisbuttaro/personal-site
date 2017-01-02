$(document).ready(function() {

var cButton=$('<button>');
 cButton.addClass('cButton animated fadeInLeftBig');

 cButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
   cButton.removeClass('animated fadeInUpBig');
   cButton.addClass('hvr-float-shadow');
 });
 cButton.click(function(e){

      var vuButton=$('<button>');
      vuButton.addClass('hvr-grow');
      vuButton.addClass('vuButton animated flipInX');
      vuButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      vuButton.removeClass('animated flipInX');
      vuButton.click(function() {
      window.open("http://35.160.181.17:8080/Vu", "_blank");
        });
      });
      var presButton=$('<button>');
      presButton.addClass('hvr-grow');
      presButton.addClass('presButton animated flipInX');
      presButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      presButton.removeClass('animated flipInX');
      presButton.click(function() {
      window.open("http://35.160.181.17:8080/PresidentsProject", "_blank");
        });
      });
      var marioButton=$('<button>');
      marioButton.addClass('hvr-grow');
      marioButton.addClass('marioButton animated flipInX');
      marioButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      marioButton.removeClass('animated flipInX');
      marioButton.click(function() {
      window.open("JSCalculator/JSCalculator.html", "_blank");
        });
      });
      $('div').empty();
      $('div').append(create);
      $('div').append(marioButton);
      $('div').append(vuButton);
     $('div').append(presButton);
    })

    var hButton=$('<button>');
    hButton.click(function(e){
          $('div').empty();
          $('div').append(hist);

    })

      hButton.addClass('hvr-float-shadow');
     hButton.addClass('hButton animated fadeInUpBig');
     hButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
       hButton.removeClass('animated fadeInUpBig');
     });



     var rButton=$('<button>');
     rButton.addClass('hvr-float-shadow');
      rButton.addClass('rButton animated fadeInDownBig ');
      rButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        rButton.removeClass('animated fadeInUpBig');
      });
      var form=$('<form>');
      form.attr('method', 'GET');
      form.attr('action', 'ChrisButtaro.pdf');
      var dlButton=$('<button>');
      dlButton.addClass('class="btn btn-primary')
      dlButton.text('Download Resume');
      form.attr("target", "_blank");
      dlButton.attr('type', 'submit');
      form.append(dlButton);

      form.addClass('animated bounceInLeft');
      rButton.click(function(e){
            $('div').empty();
            $('div').append(resume);
            $('div').append(form);

      })

      var iButton=$('<button>');
      iButton.addClass('hvr-float-shadow');
       iButton.addClass('iButton animated fadeInUpBig');
       iButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         iButton.removeClass('animated fadeInUpBig');
       });
       iButton.click(function(e){
             $('div').empty();
             $('div').append(i);

       })

       var sButton=$('<button>');
       sButton.addClass('hvr-float-shadow');
        sButton.addClass('sButton animated fadeInRightBig');
        sButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          sButton.removeClass('animated fadeInUpBig');
        });
        sButton.click(function(e){
              $('div').empty();
              $('div').append(skills);

        })




$('body').append(cButton);
$('body').append(hButton);
$('body').append(rButton);
$('body').append(iButton);
$('body').append(sButton);


var resume=$('<p>');
resume.append(`
<font  size="30"><p style="text-align: center;"><strong> &nbsp;Chris Buttaro</strong></p></font>
<p style="text-align: center;"><span style="font-weight: 400;">(340)227-7201|chris.buttaro@gmail.com|www.chrisbuttaro.com|<a href="https://github.com/chrisbuttaro">https://github.com/chrisbuttaro</a></span></p>
<p style="text-align: center;"><strong>&nbsp;</strong></p>
<p>&nbsp;</p>
<p><strong>Full Stack Developer</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Used AJAX, JSON and jQuery to expose server-side functionality to JavaScript clients. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Leveraged the AngularJS library to simplify JavaScript and create engaging user interfaces.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Designed, developed, and consumed REST APIs to create modern, single-page (SPA), dynamic, applications. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Developed Java applications that use the Spring Framework to handle object creation and integration. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Implemented object-oriented features such as encapsulation, inheritance, and polymorphism. &nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Integrated access to databases using the Java Persistence API (JPA) and Hibernate ORM framework. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Retrieved data from relational databases using JPQL/SQL queries. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Wrote several JUnit tests. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Used HTML5, CSS, and Bootstrap to markup the text of web application pages. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Leveraged linux based systems to deploy web applications and supporting databases to Amazon Web Services </span></li>
</ul>
<p><br /><span style="font-weight: 400;"><br /></span></p>
<p><strong> &nbsp;&nbsp;KEY SKILLS</strong></p>
<p>&nbsp;</p>
<p style="text-align: center;"><strong>JAVA</strong></p>
<p style="text-align: center;"><span style="font-weight: 400;">Spring</span></p>
<p style="text-align: center;"><span style="font-weight: 400;">Spring MVC</span></p>
<p style="text-align: center;"><span style="font-weight: 400;">JUnit</span></p>
<p style="text-align: center;"><span style="font-weight: 400;">JPA</span></p>
<p style="text-align: center;"><span style="font-weight: 400;">JPQL </span></p>
<p style="text-align: center;"><span style="font-weight: 400;">JSPs</span></p>
<p style="text-align: center;"><span style="font-weight: 400;">JDBC </span></p>
<p style="text-align: center;"><span style="font-weight: 400;">Maven </span></p>
<p style="text-align: center;"><span style="font-weight: 400;">Eclipse </span></p>
<p style="text-align: center;"><span style="font-weight: 400;">REST</span></p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: center;"><strong>JAVASCRIPT</strong></p>
<p style="text-align: center;"><span style="font-weight: 400;">jQuery </span></p>
<p style="text-align: center;"><span style="font-weight: 400;">jQueryUI </span></p>
<p style="text-align: center;"><span style="font-weight: 400;">AJAX</span></p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: center;"><strong>&nbsp;AngularJS</strong></p>
<p style="text-align: center;"><strong>HTML 5</strong></p>
<p style="text-align: center;"><strong>CSS 3</strong></p>
<p style="text-align: center;"><strong>SQL</strong></p>
<p style="text-align: center;"><strong>Git</strong></p>
<p style="text-align: center;"><strong>Linux CLI</strong></p>
<p style="text-align: center;"><br /><br /><br /></p>
<p style="text-align: center;">&nbsp;</p>
<p><strong>SOFTWARE PROJECTS</strong></p>
<p>&nbsp;</p>
<p><strong>Full Stack Group MVC Project &nbsp;</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></p>
<p><strong>&nbsp;</strong><a href="http://35.160.181.17:8080/Vu/"><strong><em>http://35.160.181.17:8080/Vu</em></strong></a></p>
<p><strong><em>Login:</em></strong><strong><em> John &nbsp;</em></strong><strong><em>Password:</em></strong><strong><em> password </em></strong></p>
<p>&nbsp;</p>
<p><em><span style="font-weight: 400;">In week 8 at Skill Distillery our cohort was divided into 3-person teams. Along with my collaborators Jonathan Edwards and Sarah Passantino we completed a web application for users to log in and keep track of their good times by adding photos, descriptions, and map locations. &nbsp;Full CRUD for user data was implemented on a SQL database we designed and created. &nbsp;</span></em><em><span style="font-weight: 400;">&nbsp;</span></em></p>
<p>&nbsp;</p>
<p><strong>Technologies Used:</strong></p>
<p>&nbsp;</p>
<ul>
<li><strong><span style="font-weight: 400;">FRONTEND &ndash; HTML5, JSP, Bootstrap</span></strong></li>
</ul>
<ul>
<li><span style="font-weight: 400;">BACKEND &ndash; Spring MVC, JPA, JDBC</span></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Shruti Arora Photography &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></p>
<p><strong>&nbsp;</strong><a href="http://35.160.181.17:8080/Vu/"><strong><em>http://35.160.181.17:8080/photoCrud</em></strong></a></p>
<p><strong><em>Password:</em></strong><strong><em> obie</em></strong></p>
<p>&nbsp;</p>
<p><em><span style="font-weight: 400;">After studying Spring MVC, we were asked to create a web application capable of CRUD. I decided to create "Photo" objects which include image sources and widths as attributes. In addition to the project requirements I added the functionality of writing to a file in order to save any changes made by the user. </span></em></p>
<p>&nbsp;</p>
<p><strong>Technologies Used:</strong></p>
<p>&nbsp;</p>
<ul>
<li><strong><span style="font-weight: 400;">FRONTEND &ndash; HTML5, CSS JSP, Bootstrap</span></strong></li>
</ul>
<ul>
<li><span style="font-weight: 400;">BACKEND &ndash; Java, Spring MVC</span></li>
</ul>
<p>&nbsp;</p>
<p><br /><br /></p>
<p><strong>EMPLOYMENT HIGHLIGHTS</strong></p>
<p>&nbsp;</p>
<p><strong>Telecommunications Technician </strong></p>
<p><strong> ITT Exelis</strong><span style="font-weight: 400;"> (Sept.2006-Sept.2012)</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Worked with technicians at multiple distant end locations for troubleshooting and reporting on critical network link outages.</span></li>
</ul>
<p><span style="font-weight: 400;">Iraq/Afghanistan</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Leader of a four man team responsible for maintaining trunk and circuit NIPR, SIPR, and DSN links. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Accountable for facility physical security and security of encryption keys and devices.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Responsible for reporting residual data for 2 USC 60 earth terminal antennas.</span></li>
</ul>
<p><span style="font-weight: 400;">Qatar</span></p>
<p><span style="font-weight: 400;">Responsible for maintaining and troubleshooting communications links at an T0/T1 Edge facility serving multiple bases in Iraq and Afghanistan.</span><span style="font-weight: 400;"> &nbsp;</span></p>
<p><br /><br /></p>
<p><strong>Army Signal Technician </strong></p>
<p><strong>U.S. Army </strong><span style="font-weight: 400;">Fort Gordon, Hurricane Katrina, Haiti, Panama, &amp; South Korea </span></p>
<p><span style="font-weight: 400;">(Oct. 2002-May 2006) </span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Configured, installed and maintained network links on Promina Multiplexer 400.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Responsible for updating network encryption keys.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Racked, cabled, installed software, and configured security settings on Microsoft Domain, DNS, &amp; DHCP Servers. </span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Configured CISCO router and switch ports.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Created user accounts in Active Directory.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Configured user terminals.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Awarded the Army Commendation Medal and Joint service Achievement Medal</span></li>
</ul>
<p><br /><br /><br /></p>
<p><strong>EDUCATION</strong></p>
<p>&nbsp;</p>
<p><strong>Full Stack Java Development Training Program</strong></p>
<p><em><span style="font-weight: 400;">Skill Distillery; Greenwood Village, CO (2016-present)</span></em></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><em><span style="font-weight: 400;">19 week program consisting of 40 hours per week in class with an additional 20-30 hours per week of readings and project work.</span></em></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Oracle Certified Associate, Java SE 8 Programmer</strong></p>
<p><em><span style="font-weight: 400;">(Certified October, 2016)</span></em></p>
<p>&nbsp;</p>
<p><strong>Applied Mathematics</strong></p>
<p><em><span style="font-weight: 400;">University</span></em> <em><span style="font-weight: 400;">of</span></em> <em><span style="font-weight: 400;">the Virgin Islands;</span></em> <em><span style="font-weight: 400;">St. Thomas,VI</span></em></p>
<p><em><span style="font-weight: 400;">(2012-2015)</span></em></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><em><span style="font-weight: 400;">Completed three years of Applied Mathematics (GPA 3.67)</span></em></li>
</ul>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Accepted into Columbia University's Earth and Environmental Engineering Program </span></li>
</ul>
<p>&nbsp;</p>
<p><strong>Multi-Channel Transmission Systems Operator/Maintainer Course</strong></p>
<p><span style="font-weight: 400;"> Lightening University Ft. Gordon, GA </span></p>
<p><em><span style="font-weight: 400;">(2002)</span></em></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><em><span style="font-weight: 400;">9 week program consisting of 40 hours per week studying and troubleshooting military line of sight antennas. </span></em></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>`);
resume.addClass('resume animated fadeIn');

var create=$('<p>');
create.addClass('create animated fadeIn');
create.append(`<p><font size="30"><strong>Create</strong></font></p>
<p style="text-align: center;">&nbsp;</p>
<p><font size="3"><span style="font-weight: 400;">The process of creation is what attracted me to programming initially. &nbsp;For me, there&rsquo;s nothing more inspiring than being presented with a set of problems, brainstorming all the various solutions, testing my ideas, and building something functional that brings real value to people&rsquo;s lives. &nbsp;&nbsp;</span></font></p>`);

var hist=$('<p>');
hist.addClass('hist animated fadeIn')
hist.append(`<p><font size="30"><strong>History</strong></font></p>
<p><br /><span style="font-weight: 400;">Each of us has a unique set of experiences that we draw on when facing new problems. &nbsp;My challenges have often come under difficult conditions, where my failures could have had real consequences. &nbsp;As a military communications technician in South Korea, Haiti, Hurricane Katrina, Iraq, Afghanistan, and Qatar. &nbsp;I know what it's like to be depended on. &nbsp;As an applied mathematics student, I know what it&rsquo;s like to work day in, day out, for months at a time, in order to be successful. &nbsp;I always keep both my military and academic background in mind when I am faced with a new situation. &nbsp;Having gone through truly difficult circumstances, I can recognize situations that may seem formidable at first glance, but are actually completely manageable. &nbsp;&nbsp;Furthermore, when an issue is critical I know I can rely on myself to act and innovate accordingly as I have done so many times in the past. </span></p>`);

var i=$('<p>');
i.addClass('i animated fadeIn');
i.append(`<p><font size="30"><strong>I</font></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">I love problem solving.</span></p>
<p><span style="font-weight: 400;">I enjoy creative, stimulating atmospheres.</span></p>
<p><span style="font-weight: 400;">I excel in a team environment. </span></p>
<p><span style="font-weight: 400;">I cannot help but persist until a problem is solved. </span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">I love to travel.</span></p>
<p><span style="font-weight: 400;">I enjoy art.</span></p>
<p><span style="font-weight: 400;">I go camping whenever possible.</span></p>
<p><span style="font-weight: 400;">I lived in the Virgin Islands for three years.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">I am always exploring new territories in life. </span></p><br><br>`);

var skills=$('<p>');
skills.addClass('skills animated fadeIn');
skills.append(`<p><font size="30"><strong>Skills</strong></font></p>
<p><br /><span style="font-weight: 400;">Aside from the skills presented in my resume, there&rsquo;s more that I bring to the table. &nbsp;I am not only technically proficient but I&rsquo;m personable as well. &nbsp;I enjoy communicating with coworkers and clients to ensure that my work hits the mark. &nbsp;I look for my teammate&rsquo;s strengths to ensure we all bring our best to a project. &nbsp;</span></p>`);
})
