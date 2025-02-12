fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        // Ensure we are updating the right content
        document.querySelector('h2').textContent = data.projectName;
        document.querySelector('p').textContent = data.description;

        // Create a team section
        let teamSection = document.createElement('section');
        teamSection.innerHTML = "<h3>Team Members</h3>";

        let teamList = document.createElement('ul');
        data.team.forEach(member => {
            let li = document.createElement('li');
            li.textContent = `${member.name} - ${member.role}`;
            teamList.appendChild(li);
        });

        teamSection.appendChild(teamList);
        document.body.appendChild(teamSection);

        // Create a milestones section
        let milestoneSection = document.createElement('section');
        milestoneSection.innerHTML = "<h3>SWJ Project Milestones</h3>";

        let milestoneList = document.createElement('ul');
        data.milestones.forEach(milestone => {
            let li = document.createElement('li');
            li.textContent = `${milestone.title} (${milestone.date}) - ${milestone.status}`;
            milestoneList.appendChild(li);
        });

        milestoneSection.appendChild(milestoneList);
        document.body.appendChild(milestoneSection);
    })
    .catch(error => console.error("Error loading JSON for SWJ project:", error));
