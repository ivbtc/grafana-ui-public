"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_locales_en-US_grafana_json"],{

/***/ "./public/locales/en-US/grafana.json":
/***/ ((module) => {

module.exports = JSON.parse('{"_comment":"This file is the source of truth for English strings. Edit this to change plurals and other phrases for the UI.","access-control":{"add-permission":{"role-label":"Role","team-label":"Team","title":"Add permission for","user-label":"User"},"add-permissions":{"save":"Save"},"permission-list":{"permission":"Permission"},"permissions":{"add-label":"Add a permission","no-permissions":"There are no permissions","permissions-change-warning":"This will change permissions for this folder and all its descendants. In total, this will affect:","role":"Role","team":"Team","title":"Permissions","user":"User"}},"browse-dashboards":{"action":{"cancel-button":"Cancel","delete-button":"Delete","delete-modal-text":"This action will delete the following content:","delete-modal-title":"Delete","deleting":"Deleting...","manage-permissions-button":"Manage permissions","move-button":"Move","move-modal-alert":"Moving this item may change its permissions.","move-modal-field-label":"Folder name","move-modal-text":"This action will move the following content:","move-modal-title":"Move","moving":"Moving...","new-folder-name-required-phrase":"Folder name is required."},"counts":{"alertRule__one":"{{count}} alert rule","alertRule__other":"{{count}} alert rules","dashboard__one":"{{count}} dashboard","dashboard__other":"{{count}} dashboards","folder__one":"{{count}} folder","folder__other":"{{count}} folders","libraryPanel__one":"{{count}} library panel","libraryPanel__other":"{{count}} library panels","total__one":"{{count}} item","total__other":"{{count}} items"},"dashboards-tree":{"name-column":"Name","tags-column":"Tags"},"folder-actions-button":{"delete":"Delete","folder-actions":"Folder actions","manage-permissions":"Manage permissions","move":"Move"},"folder-picker":{"accessible-label":"Select folder: {{ label }} currently selected","button-label":"Select folder","empty-message":"No folders found","error-title":"Error loading folders","search-placeholder":"Search folders","unknown-error":"Unknown error"},"manage-folder-nav":{"alert-rules":"Alert rules","dashboards":"Dashboards","panels":"Panels","permissions":"Permissions","settings":"Settings"},"new-folder-form":{"cancel-label":"Cancel","create-label":"Create","name-label":"Folder name"},"no-results":{"clear":"Clear search and filters","text":"No results found for your query."}},"clipboard-button":{"inline-toast":{"success":"Copied"}},"command-palette":{"action":{"change-theme":"Change theme...","dark-theme":"Dark","light-theme":"Light"},"search-box":{"placeholder":"Search or jump to..."},"section":{"actions":"Actions","dashboard-search-results":"Dashboards","folder-search-results":"Folders","pages":"Pages","preferences":"Preferences","recent-dashboards":"Recent dashboards"}},"common":{"locale":{"default":"Default"},"save":"Save"},"connections":{"connect-data":{"category-header-label":"Data sources"},"search":{"placeholder":"Search all"}},"dashboard":{"add-menu":{"import":"Import from library","paste-panel":"Paste panel","row":"Row","visualization":"Visualization","widget":"Widget"},"empty":{"add-import-body":"Import visualizations that are shared with other dashboards.","add-import-button":"Import library panel","add-import-header":"Import panel","add-row-body":"Group your visualizations into expandable sections.","add-row-button":"Add row","add-row-header":"Add a row","add-visualization-body":"Select a data source and then query and visualize your data with charts, stats and tables or create lists, markdowns and other widgets.","add-visualization-button":"Add visualization","add-visualization-header":"Start your new dashboard by adding a visualization","add-widget-body":"Create lists, markdowns and other widgets","add-widget-button":"Add widget","add-widget-header":"Add a widget"},"inspect":{"data-tab":"Data","error-tab":"Error","json-tab":"JSON","meta-tab":"Meta Data","query-tab":"Query","stats-tab":"Stats","subtitle":"{{queryCount}} queries with total query time of {{formatted}}","title":"Inspect: {{panelTitle}}"},"inspect-data":{"data-options":"Data options","dataframe-aria-label":"Select dataframe","dataframe-label":"Show data frame","download-csv":"Download CSV","download-excel-description":"Adds header to CSV for use with Excel","download-excel-label":"Download for Excel","download-logs":"Download logs","download-service":"Download service graph","download-traces":"Download traces","excel-header":"Excel header","formatted":"Formatted data","formatted-data-description":"Table data is formatted with options defined in the Field and Override tabs.","formatted-data-label":"Formatted data","panel-transforms":"Panel transforms","series-to-columns":"Series joined by time","transformation":"Series joined by time","transformations-description":"Table data is displayed with transformations defined in the panel Transform tab.","transformations-label":"Apply panel transformations"},"inspect-json":{"dataframe-description":"Raw data without transformations and field config applied. ","dataframe-label":"DataFrame JSON (from Query)","panel-data-description":"The raw model passed to the panel visualization","panel-data-label":"Panel data","panel-json-description":"The model saved in the dashboard JSON that configures how everything works.","panel-json-label":"Panel JSON","select-source":"Select source","unknown":"Unknown Object: {{show}}"},"inspect-meta":{"no-inspector":"No Metadata Inspector"},"inspect-stats":{"data-title":"Data source stats","data-traceids":"Trace IDs","processing-time":"Data processing time","queries":"Number of queries","request-time":"Total request time","rows":"Total number rows","table-title":"Stats"},"toolbar":{"add":"Add","add-panel":"Add panel","mark-favorite":"Mark as favorite","open-original":"Open original dashboard","playlist-next":"Go to next dashboard","playlist-previous":"Go to previous dashboard","playlist-stop":"Stop playlist","refresh":"Refresh dashboard","save":"Save dashboard","settings":"Dashboard settings","share":"Share dashboard or panel","unmark-favorite":"Unmark as favorite"}},"data-sources":{"datasource-add-button":{"label":"Add new data source"}},"folder-picker":{"loading":"Loading folders..."},"grafana-ui":{"segment-async":{"error":"Failed to load options","loading":"Loading options...","no-options":"No options found"},"select":{"no-options-label":"No options found","placeholder":"Choose"}},"library-panel":{"add-modal":{"cancel":"Cancel","create":"Create library panel","error":"Library panel with this name already exists","folder":"Save in folder","folder-description":"Library panel permissions are derived from the folder permissions","name":"Library panel name"},"add-widget":{"title":"Add panel from panel library"}},"library-panels":{"save":{"error":"Error saving library panel: \\"{{errorMsg}}\\"","success":"Library panel saved"}},"login":{"error":{"blocked":"You have exceeded the number of login attempts for this user. Please try again later.","invalid-user-or-password":"Invalid username or password","title":"Login failed","unknown":"Unknown error occurred"}},"nav":{"add-new-connections":{"title":"Add new connection"},"admin":{"subtitle":"Manage server-wide settings and access to resources such as organizations, users, and licenses","title":"Server admin"},"alerting":{"subtitle":"Learn about problems in your systems moments after they occur","title":"Alerting"},"alerting-admin":{"title":"Admin"},"alerting-am-routes":{"subtitle":"Determine how alerts are routed to contact points","title":"Notification policies"},"alerting-channels":{"title":"Notification channels"},"alerting-groups":{"subtitle":"See grouped alerts from an Alertmanager instance","title":"Groups"},"alerting-home":{"title":"Home"},"alerting-legacy":{"title":"Alerting (legacy)"},"alerting-list":{"subtitle":"Rules that determine whether an alert will fire","title":"Alert rules"},"alerting-receivers":{"subtitle":"Choose how to notify your contact points when an alert instance fires","title":"Contact points"},"alerting-silences":{"subtitle":"Stop notifications from one or more alerting rules","title":"Silences"},"alerts-and-incidents":{"subtitle":"Alerting and incident management apps","title":"Alerts & IRM"},"api-keys":{"subtitle":"Manage and create API keys that are used to interact with Grafana HTTP APIs","title":"API keys"},"application":{"title":"Application (preview)"},"apps":{"subtitle":"App plugins that extend the Grafana experience","title":"Apps"},"authentication":{"title":"Authentication"},"config":{"title":"Administration"},"connect-data":{"title":"Connect data"},"connections":{"subtitle":"Browse and create new connections","title":"Connections"},"correlations":{"subtitle":"Add and configure correlations","title":"Correlations"},"create":{"title":"Create"},"create-alert":{"title":"Create alert rule"},"create-dashboard":{"title":"Dashboard"},"create-folder":{"title":"Folder"},"create-import":{"title":"Import dashboard"},"dashboards":{"subtitle":"Create and manage dashboards to visualize your data","title":"Dashboards"},"data-sources":{"subtitle":"View and manage your connected data source connections","title":"Data sources"},"datasources":{"subtitle":"Add and configure data sources","title":"Data sources"},"detect":{"title":"Detect"},"explore":{"title":"Explore"},"frontend":{"title":"Frontend"},"global-orgs":{"subtitle":"Isolated instances of Grafana running on the same server","title":"Organizations"},"global-users":{"subtitle":"Manage users in Grafana","title":"Users"},"grafana-quaderno":{"title":"Grafana Quaderno"},"help":{"title":"Help"},"help/community":"Community","help/documentation":"Documentation","help/keyboard-shortcuts":"Keyboard shortcuts","help/support":"Support","home":{"title":"Home"},"incidents":{"title":"Incidents"},"infrastructure":{"title":"Infrastructure"},"kubernetes":{"title":"Kubernetes"},"library-panels":{"subtitle":"Reusable panels that can be added to multiple dashboards","title":"Library panels"},"machine-learning":{"title":"Machine learning"},"manage-folder":{"subtitle":"Manage folder dashboards and permissions"},"monitoring":{"subtitle":"Monitoring and infrastructure apps","title":"Observability"},"new":{"title":"New"},"new-dashboard":{"title":"New dashboard"},"new-folder":{"title":"New folder"},"observability":{"title":"Observability"},"oncall":{"title":"OnCall"},"org-settings":{"subtitle":"Manage preferences across an organization","title":"Default preferences"},"performance-testing":{"title":"Performance testing"},"playlists":{"subtitle":"Groups of dashboards that are displayed in a sequence","title":"Playlists"},"plugins":{"subtitle":"Extend the Grafana experience with plugins","title":"Plugins"},"profile/notifications":{"title":"Notification history"},"profile/password":{"title":"Change password"},"profile/settings":{"title":"Profile"},"profiles":{"title":"Profiles (preview)"},"public":{"title":"Public dashboards"},"recorded-queries":{"title":"Recorded queries"},"reporting":{"title":"Reporting"},"scenes":{"title":"Scenes"},"search":{"placeholderCommandPalette":"Search or jump to..."},"search-dashboards":{"title":"Search dashboards"},"server-settings":{"subtitle":"View the settings defined in your Grafana config","title":"Settings"},"service-accounts":{"subtitle":"Use service accounts to run automated workloads in Grafana","title":"Service accounts"},"sign-out":{"title":"Sign out"},"slo":{"title":"SLO"},"snapshots":{"subtitle":"Interactive, publically available, point-in-time representations of dashboards","title":"Snapshots"},"starred":{"title":"Starred"},"starred-empty":{"title":"Your starred dashboards will appear here"},"statistics-and-licensing":{"title":"Statistics and licensing"},"storage":{"subtitle":"Manage file storage","title":"Storage"},"support-bundles":{"subtitle":"Download support bundles","title":"Support bundles"},"synthetics":{"title":"Synthetics"},"teams":{"subtitle":"Groups of users that have common dashboard and permission needs","title":"Teams"},"upgrading":{"title":"Stats and license"},"users":{"subtitle":"Invite and assign roles to users","title":"Users"}},"navigation":{"kiosk":{"tv-alert":"Press ESC to exit kiosk mode"},"toolbar":{"enable-kiosk":"Enable kiosk mode","toggle-menu":"Toggle menu","toggle-search-bar":"Toggle top search bar"}},"news":{"title":"Latest from the blog"},"notifications":{"starred-dashboard":"Dashboard starred","unstarred-dashboard":"Dashboard unstarred"},"panel":{"header-menu":{"copy":"Copy","create-library-panel":"Create library panel","duplicate":"Duplicate","edit":"Edit","explore":"Explore","get-help":"Get help","hide-legend":"Hide legend","inspect":"Inspect","inspect-data":"Data","inspect-json":"Panel JSON","more":"More...","query":"Query","remove":"Remove","share":"Share","show-legend":"Show legend","unlink-library-panel":"Unlink library panel","view":"View"}},"refresh-picker":{"aria-label":{"choose-interval":"Auto refresh turned off. Choose refresh time interval","duration-selected":"Choose refresh time interval with current interval {{durationAriaLabel}} selected"},"auto-option":{"aria-label":"","label":""},"live-option":{"aria-label":"Turn on live streaming","label":"Live"},"off-option":{"aria-label":"Turn off auto refresh","label":"Off"},"select-button":{"auto-refresh":"Set auto refresh interval"}},"search":{"actions":{"include-panels":"Include panels","remove-datasource-filter":"Datasource: {{datasource}}","sort-placeholder":"Sort","starred":"Starred","view-as-folders":"View by folders","view-as-list":"View as list"},"dashboard-actions":{"import":"Import","new":"New","new-dashboard":"New dashboard","new-folder":"New folder"},"folder-view":{"go-to-folder":"Go to folder","select-folder":"Select folder"},"result-kind":{"dashboard":"Dashboard","folder":"Folder","panel":"Panel"},"results-table":{"datasource-header":"Data source","location-header":"Location","name-header":"Name","tags-header":"Tags","type-dashboard":"Dashboard","type-folder":"Folder","type-header":"Type"},"search-input":{"include-panels-placeholder":"Search for dashboards, folders, and panels","placeholder":"Search for dashboards and folders"}},"search-view":{"no-results":{"clear":"Clear search and filters","text":"No results found for your query."}},"share-modal":{"dashboard":{"title":"Share"},"embed":{"copy":"Copy to clipboard","html":"Embed HTML","html-description":"The HTML code below can be pasted and included in another web page. Unless anonymous access is enabled, the user viewing that page need to be signed into Grafana for the graph to load.","info":"Generate HTML for embedding an iframe with this panel.","time-range":"Current time range","time-range-description":"Transforms the current relative time range to an absolute time range"},"export":{"cancel-button":"Cancel","info-text":"Export this dashboard.","save-button":"Save to file","share-default-label":"Export with default values removed","share-externally-label":"Export for sharing externally","view-button":"View JSON"},"library":{"info":"Create library panel."},"link":{"copy-link-button":"Copy","info-text":"Create a direct link to this dashboard or panel, customized with the options below.","link-url":"Link URL","render-alert":"Image renderer plugin not installed","render-instructions":"To render a panel image, you must install the&nbsp;<1>Grafana image renderer plugin</1>. Please contact your Grafana administrator to install the plugin.","rendered-image":"Direct link rendered image","save-alert":"Dashboard is not saved","save-dashboard":"To render a panel image, you must save the dashboard first.","shorten-url":"Shorten URL","time-range-description":"Transforms the current relative time range to an absolute time range","time-range-label":"Lock time range"},"panel":{"title":"Share Panel"},"snapshot":{"cancel-button":"Cancel","copy-link-button":"Copy","delete-button":"Delete snapshot.","deleted-message":"The snapshot has been deleted. If you have already accessed it once, then it might take up to an hour before before it is removed from browser caches or CDN caches.","expire":"Expire","expire-day":"1 Day","expire-hour":"1 Hour","expire-never":"Never","expire-week":"7 Days","info-text-1":"A snapshot is an instant way to share an interactive dashboard publicly. When created, we strip sensitive data like queries (metric, template, and annotation) and panel links, leaving only the visible metric data and series names embedded in your dashboard.","info-text-2":"Keep in mind, your snapshot <1>can be viewed by anyone</1> that has the link and can access the URL. Share wisely.","local-button":"Local Snapshot","mistake-message":"Did you make a mistake? ","name":"Snapshot name","timeout":"Timeout (seconds)","timeout-description":"You might need to configure the timeout value if it takes a long time to collect your dashboard metrics.","url-label":"Snapshot URL"},"tab-title":{"embed":"Embed","export":"Export","library-panel":"Library panel","link":"Link","snapshot":"Snapshot"},"theme-picker":{"current":"Current","dark":"Dark","field-name":"Theme","light":"Light"},"view-json":{"copy-button":"Copy to Clipboard"}},"shared":{"preferences":{"theme":{"dark-label":"Dark","light-label":"Light","system-label":"System preference"}}},"shared-dashboard":{"fields":{"timezone-label":"Timezone"}},"shared-preferences":{"fields":{"home-dashboard-label":"Home Dashboard","home-dashboard-placeholder":"Default dashboard","locale-label":"Language","locale-placeholder":"Choose language","theme-label":"Interface theme","week-start-label":"Week start"},"theme":{"default-label":"Default"},"title":"Preferences"},"tag-filter":{"loading":"Loading...","no-tags":"No tags found","placeholder":"Filter by tag"},"time-picker":{"absolute":{"recent-title":"Recently used absolute ranges","title":"Absolute time range"},"calendar":{"apply-button":"Apply time range","cancel-button":"Cancel","select-time":"Select a time range"},"content":{"empty-recent-list":"<0><0>It looks like you haven&apos;t used this time picker before. As soon as you enter some time intervals, recently used intervals will appear here.</0></0><1><0>Read the documentation</0><1> to find out more about how to enter custom time ranges.</1></1>","filter-placeholder":"Search quick ranges"},"footer":{"change-settings-button":"Change time settings","fiscal-year-option":"Fiscal year","fiscal-year-start":"Fiscal year start month","time-zone-option":"Time zone","time-zone-selection":"Time zone selection"},"range-content":{"apply-button":"Apply time range","default-error":"Please enter a past date or \\"now\\"","fiscal-year":"Fiscal year","from-input":"From","range-error":"\\"From\\" can\'t be after \\"To\\"","to-input":"To"},"range-picker":{"backwards-time-aria-label":"Move time range backwards","current-time-selected":"Time range selected: {{currentTimeRange}}","forwards-time-aria-label":"Move time range forwards","to":"to","zoom-out-button":"Zoom out time range","zoom-out-tooltip":"Time range zoom out <1></1> CTRL+Z"},"time-range":{"aria-role":"Time range selection","default-title":"Time ranges","example-title":"Example time ranges","specify":"Specify time range <1></1>"},"zone":{"select-aria-label":"Time zone picker","select-search-input":"Type to search (country, city, abbreviation)"}},"user-orgs":{"current-org-button":"Current","name-column":"Name","role-column":"Role","select-org-button":"Select organisation","title":"Organizations"},"user-profile":{"fields":{"email-error":"Email is required","email-label":"Email","name-error":"Name is required","name-label":"Name","username-label":"Username"}},"user-session":{"browser-column":"Browser & OS","created-at-column":"Logged on","ip-column":"IP address","revoke":"Revoke user session","seen-at-column":"Last seen"},"user-sessions":{"loading":"Loading sessions..."},"variable":{"adhoc":{"placeholder":"Select value"},"dropdown":{"placeholder":"Enter variable value"},"picker":{"link-all":"All","option-all":"All","option-selected-values":"Selected","option-tooltip":"Clear selections"},"textbox":{"placeholder":"Enter variable value"}}}');

/***/ })

}]);