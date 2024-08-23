document.querySelectorAll('.container').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('expanded');
    });
});

document.querySelector('.about-us').addEventListener('click', () => {
    document.querySelector('.about-us').innerHTML = `<h2>About Us</h2>
        <div class="content">
        <p>Insightrix is a software development firm excelling in data management and client relationship management firm. Our products used by over 200 major companies in 37 countries across 3 continents. We pride ourselves as market leaders with 37% market share in customer management systems, hosting 2.7% of all websites and maintaining 43 data centers all around the globe. We bring solutions to people and make their life better. Thats our motto: innovate, inspire and transform.</p>
        </div>`;
});

document.querySelector('.why-choose-us').addEventListener('click', () => {
    document.querySelector('.why-choose-us').innerHTML = `<h2>Why Choose Insightrix</h2>
        <div class="content">
        <p>We believe in creating an environment where professionals can thrive. Here's what we offer:
        1. Competitive Compensation: We offer salaries that reflect the high value we place on expertise and impact.
        2. Comprehensive Benefits: Enjoy robust health insurance, a solid retirement plan, and generous paid time off to ensure work-life balance.
        3. Professional Development: Advance your career through our ongoing training programs, workshops, and attendance at industry-leading conferences.
        4. Innovative Work Culture: Join a team that fosters creativity, collaboration, and complex problem-solving at every level.
        5. Flexible Work Arrangements: We understand the importance of work-life harmony and offer remote work options and flexible schedules.
        6. Team Building: Participate in engaging team activities, hackathons, and social events that promote a strong sense of community.</p>
        </div>`;
});

document.querySelector('.career-opportunity').addEventListener('click', () => {
    document.querySelector('.career-opportunity').innerHTML = `<h2>Career Opportunities</h2>
        <div class="content">
        <h3>1) Data Analyst:</h3>
        <ul>
            <li>Analyze complex datasets to generate actionable insights</li>
            <li>Produce comprehensive reports and data visualizations</li>
            <li>Collaborate with cross-functional teams to identify trends and opportunities</li>
        </ul>
        <h4>Skills Required:</h4>
        <ul>
            <li>Proficiency in Python, R</li>
            <li>Strong understanding of machine learning algorithms and statistical modeling.</li>
            <li>EDA & Data Cleaning Skills</li>
            <li>Familiarity with visualization tools like Power BI, Tableau</li>
            <li>Ability to present findings and insights to non-technical stakeholders through reports and presentations.</li>
        </ul>
        <h3>2) Database Engineer:</h3>
        <ul>
            <li>Create and optimize database schemas and architectures to ensure efficient data storage and retrieval.</li>
            <li>Work on the creation and integration of databases with applications and systems.</li>
            <li>Maintain data security and integrity, ensuring compliance with relevant regulations.</li>
        </ul>
        <h4>Skills Required:</h4>
        <ul>
            <li>Proficiency in SQL, MySQL, and NoSQL databases</li>
            <li>Strong experience in database design, development, and optimization.</li>
            <li>Familiarity with database management systems and query languages.</li>
        </ul>
        <h3>3) Machine Learning Engineer:</h3>
        <ul>
            <li>Develop and implement machine learning models and algorithms to solve complex business problems.</li>
            <li>Collaborate with data scientists and engineers to deploy models into production.</li>
            <li>Monitor and fine-tune machine learning models to ensure optimal performance.</li>
        </ul>
        <h4>Skills Required:</h4>
        <ul>
            <li>Experience with machine learning frameworks like TensorFlow, PyTorch, or scikit-learn.</li>
            <li>Strong programming skills in Python, R, or Java.</li>
            <li>Experience in using AI tools and frameworks.</li>
        </ul>
        <h3>How to Apply:</h3>
        <p>Submit your resume and details at https://docs.google.com/forms/d/e/1FAIpQLSdGk935orO0Ea2cId9H3h_-915xDULMRu19d9RxUy1_VHysqQ/viewform</p>
        </div>`;
});

document.querySelector('.contact-us').addEventListener('click', () => {
    document.querySelector('.contact-us').innerHTML = `<h2>Contact Us</h2>
        <div class="content">
        <p>For any queries, please contact our HR department at:</p>
        <p>Email: prashantsingh190503@gmail.com</p>
        <p>Phone: 9969230009</p>
        <p>Company’s Website: <a href="mailto:careers@insightrix.com">careers@insightrix.com</a></p>
        <p>please share you cv with us at <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGk935orO0Ea2cId9H3h_-915xDULMRu19d9RxUy1_VHysqQ/viewform">Google form</a></p>
        
        </div>`;
});
