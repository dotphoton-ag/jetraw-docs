// Copyright Dotphoton 2025 AG

window.addEventListener('DOMContentLoaded', (event) => {
   // Construct the absolute path to the root _static folder
   const rootPath = document.querySelector('script[src*="_static"]').getAttribute('src').split('_static')[0];
   const supportIconPath = `${rootPath}_static/support-icon.png`;

   let supportLink = document.createElement('div');
   supportLink.innerHTML = `
      <div style="position: sticky; bottom: 20px; left: 20px; margin-top: auto; padding: var(--sidebar-item-spacing-vertical) var(--sidebar-item-spacing-horizontal); text-align: left;">

         <a href="mailto:get@dotphoton.com" style="text-decoration: none; font-size: 16px; color: #2F4AF5;">
            <img src="${supportIconPath}" alt="Support Icon" style="width: 16px; margin-right: 8px;">
            Contact Support
         </a>
      </div>
   `;

   // Find the sidebar-sticky div and append the support link
   const sidebarSticky = document.querySelector('.sidebar-sticky');
   sidebarSticky.appendChild(supportLink);

   // Workaround to move the last update date to the sidebar tree
   // Get the footer message and move its content to the sidebar-tree
   const lastupdateMessage = document.querySelector('.right-details');
   if (lastupdateMessage) {
      const sidebarTree = document.querySelector('.sidebar-tree');
      const lastUpdateDiv = document.createElement('li');
      lastUpdateDiv.className = 'caption';
      lastUpdateDiv.textContent = lastupdateMessage.textContent;
      sidebarTree.appendChild(lastUpdateDiv);

      // Remove the right-details div from the footer page
      lastupdateMessage.remove();
   }

   const toctreeCheckboxes = document.querySelectorAll('.toctree-checkbox');
   toctreeCheckboxes.forEach((checkbox) => {
      checkbox.checked = true;
      checkbox.setAttribute('aria-expanded', 'true');
   });
});
