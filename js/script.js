const button = document.getElementById('analyzeBtn');
const results = document.getElementById('results');
const urlInput = document.getElementById('urlInput');

button.addEventListener('click', () => {
const url = urlInput.value.trim();


if (!url) {
    results.innerHTML = 'Please enter a website URL.';
    return;
}

if (!url.startsWith("http://") && !url.startsWith("https://")) {
    results.innerHTML = "<p>Please enter a valid URL starting with http:// or https://</p>";
    return;
  }

results.innerHTML = 'Analyzing website...';

setTimeout(() => {

results.innerHTML = `
<h3>QA Observations</h3>

<ul>
<li>Check navigation links for broken paths</li>
<li>Verify mobile responsiveness at 768px and 375px</li>
<li>Review button contrast for accessibility</li>
<li>Ensure forms validate correctly</li>
<li>Inspect console for JavaScript errors</li>
</ul>

<h3>Suggested Testing Steps</h3>

<ol>
<li>Open Chrome DevTools</li>
<li>Check console for errors</li>
<li>Test navigation flow</li>
<li>Run Lighthouse performance audit</li>
</ol>
`;

},1500);

});