



$(document).ready(function () {
    loadParticles()

    const buttonContainer = $('<div>').addClass('button-container');
    $('body').append(buttonContainer)
    const contentDiv = $('<div>').addClass('content-div');

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

     function addButton(text, fadeDirection, heading, buttonClass) {
        const button = $('<button>');
        button.click(function() {
            handleClick(heading, text)
        })
         button.mouseover(function() {
             handleClick(heading, text)
         })
       // button.mouseover(handleClick(heading, text))
        button.addClass(`${buttonClass} animated fadeIn hvr-float-shadow`);
        button.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            button.removeClass(`fadeIn`);
        });

        buttonContainer.append(button)
    }

    function handleClick(heading,text) {
        const content = $('<p id="text">');
        content.addClass('textMargin animated fadeIn');
        content.append(`<p><strong class="heading">${heading}</strong></p>
                    <br>
                    <p><font size="3"><span style="font-weight: 400;">${text}</span></font></p>`);
        $('.content-div').empty();
        $('.content-div').append(content);
    }

    $('body').append(contentDiv);
    const cText = "I am a collaborative developer who enjoys working with teammates to deliver " +
        "comprehensive solutions. I enjoy sharing my technical insight with product managers and business" +
        " analysts to plan, prioritize, and refine user stories that align with business goals. I work " +
        "closely with fellow team members to design, test, and coordinate complex deployments. I’m committed " +
        "to mentoring junior developers to grow their skills, confidence, and contributions. " +
        "In developing software it truly takes a team and being a great team member is among " +
        "my highest priorities."

    const hText = "I bring a strong work ethic and unwavering commitment to delivering high-quality results " +
        "to every project I undertake. I see initiatives through from inception to successful completion, " +
        "focusing on meticulous execution. My proactive approach to planning and problem-solving ensures " +
        "that deadlines are met without compromising quality."

    const rText = "I believe consistency is as important as skill. Iteration after iteration, " +
        "colleagues and collaborators can count on me to follow through on commitments, complete my " +
        "features on time, and uphold high standards of quality. I prioritize clear communication, " +
        "proactive problem-solving, and thoughtful planning to ensure smooth and predictable project " +
        "outcomes. It’s important to me that my consistent performance fosters trust and contributes " +
        "to a strong, dependable team dynamic."

    const iText = "Software development relies on teamwork, but there's great value in being " +
        "persistent and solving problems independently. I consider myself a self-sufficient engineer who " +
        "enjoys troubleshooting. While I value collaboration and know when to seek help, I strive to minimize" +
        " my reliance on others. Balancing autonomy with teamwork helps makes me an effective engineer."

    const sText = "I believe it is as important to be consistent as it is to be skilled. " +
        "Iteration after iteration colleagues and collaborators can count on me to follow through " +
        "on commitments, complete my features on time, and uphold high standards of quality. I prioritize " +
        "clear communication, proactive problem-solving, and thoughtful planning to ensure smooth and " +
        "predictable project outcomes. It’s important to me that my consistent performance fosters trust and contributes to a strong, dependable team dynamic."

    async function haveButtonsAppearSequentially(ms) {
        addButton(cText, "fadeIn", "Collaborative", "cButton")
        await sleep(ms);
        addButton(hText, "fadeIn", "Hard-working", "hButton")
        await sleep(ms);
        addButton(rText, "fadeIn", "Reliable", "rButton")
        await sleep(ms);
        addButton(iText, "fadeIn", "Independent", "iButton")
        await sleep(ms);
        addButton(sText, "fadeIn", "Software Developer", "sButton")
    }
    haveButtonsAppearSequentially(500)

    const overlay = $('<div id="overlay" class="overlay">')
    const toggleButton = $('<button id="toggle-btn">')
        .addClass('toggle-btn animated fadeIn shimmerButton')
        .html('<strong>About Me</strong>')
        .click(() => {
            var sidebar = document.getElementById('sidebar');
            var button = document.getElementById('toggle-btn');
            sidebar.classList.toggle('collapsed');
            button.classList.toggle('open');
            button.classList.toggle('shimmerButton')
            if (button.classList.contains('shimmerButton')) {
                $("#overlay").remove()
                changeParticleColor('#ffffff')
                $('body').append(buttonContainer)
                $('body').append(contentDiv);
                haveButtonsAppearSequentially(500)
            } else {
                $("#text").remove()
                $(".content-div").remove()
                $(".cButton").remove()
                $(".hButton").remove()
                $(".rButton").remove()
                $(".iButton").remove()
                $(".sButton").remove()
                $(".button-container" ).remove()
                $('body').append(overlay)
                changeParticleColor('#0b0a0a')
                $("#particles-js").style.zIndex = 3000
            }
        });

    const sidebar = $('<div id="sidebar">');
    sidebar.addClass('sidebar collapsed animated fadeIn');

    const aboutMeContent = $('<div>');
    aboutMeContent.addClass('about-me-content animated fadeIn');
    aboutMeContent.html(`
        <div class="circle-container">
            <div class="image-wrapper">
                <img src="images/me.jpg" alt="Chris Buttaro" class="profile-img">
            </div>
        </div>
        <br>
        <p>I like hiking and have lived in some great places for it, including the U.S. Virgin Islands, Colorado, and
        Oregon.
        <br>
        <br>
        Professionally, my career path has been unique. I served as a soldier in South Korea, Panama, Haiti, and New
        Orleans in the aftermath of Hurricane Katrina. I also spent five years employed as military IT contractor in
        Iraq, Afghanistan, and Qatar. Finally, as a software engineer I’ve worked on several highly technical projects
        in the fields of GPS technology, high performance computing, and healthcare.
        </p>
       <form id="contact-form" action="mail.php" method="POST">
          <h3>Contact
           Me</h3>
        
          <!-- Name input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="text" id="name" name="name" class="form-control" />
            <label class="form-label" for="name">Name</label>
          </div>
        
          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="email" name="email" class="form-control" />
            <label class="form-label" for="email">Email address</label>
          </div>
        
          <!-- Subject input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="text" id="subject" name="subject" class="form-control" />
            <label class="form-label" for="subject">Subject</label>
          </div>
        
          <!-- Message input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <textarea class="form-control" id="message" name="message" rows="4"></textarea>
            <label class="form-label" for="message">Message</label>
          </div>
        
          <!-- Submit button -->
          <button data-mdb-button-init id="submit-form" type="submit" data-mdb-ripple-init class="btn btn-primary btn-block mb-4">
            Send
          </button>
    </form>
    `);

    sidebar.append(toggleButton, aboutMeContent);
    $('body').prepend(sidebar);
})

function loadParticles() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 200 }, // Number of particles
            color: { value: "#ffffff" }, // Particle color (dynamic)
            shape: { type: "circle" }, // Shape of particles
            size: { value: 3 }, // Particle size
            opacity: { value: 0.8 }, // Transparency of particles
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff", // Line color (dynamic)
                opacity: 0.5,
                width: 2 // Line width
            },
            move: { enable: true, speed: 2 } // Particle movement speed
        }
    });
}

function changeParticleColor(color) {
    pJSDom[0].pJS.particles.color.value = color;
    pJSDom[0].pJS.particles.line_linked.color = color;
    pJSDom[0].pJS.fn.particlesRefresh();
}

var form = $('<form>');
form.attr('method', 'GET');
form.attr('action', 'ChrisButtaro.pdf');
var dlButton = $('<button>');
dlButton.addClass('class="btn btn-primary')
dlButton.text('Download Resume');
form.attr("target", "_blank");
dlButton.attr('type', 'submit');
form.append(dlButton);

var resume = $('<p>');
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
