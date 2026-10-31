This is part 2 of my POE for WEDE5020.
I added a CSS stylesheet to make my Website more visually appealing.
The information from Part 1 has not changed in Part 2
I didn't use AI for Part 2; this is my work, with help from the slides given by the lecturer, 
and I did some research on Google, W3Schools and YouTube so I could get an idea of what my website can look like with the CSS stylesheet and to use some tabsheet of CSS

The screenshots of how it can fit in a tablet or a phone
![alt text](<images/Screenshot 2026-09-18 224847.jpg>)
New files
- js/main.js (all JS)
- robots.txt
- sitemap.xml

 js/main.js:
1. Map: Uses original div id="map" - Line 6 - Leaflet API - Greater Tubatse
3. Accordion: Uses original h2/h3 - Line 22
4. Dynamic: Uses original div id="programs-list" - Line 26 - loads from array
5. Search: Uses original input id="searchInput" - Line 30 - filter()
6. Forms: Uses original form id="enquiryForm" id="contactForm" - Line 35
   - Validation: name length, email includes @
   - Cost: Shows in id="enquiryResponse" - FREE / R500
   - Email: mailto to info@tebogotheronfoundation.org.za

Html changes
Only added before </body> in all pages:
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="js/main.js"></script>
And in head: title, description, viewport
Added id="map" style="height:350px"

SEO>:
- Alt text added in main.js Line 15
- robots.txt and sitemap.xml in root
