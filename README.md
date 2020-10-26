# alejandrociravegna
Based on it-worker-portfolio-theme template

https://bootstrapious.com/p/it-worker-portfolio-theme

How to modify a Bootstrap Template
Almost everyone will be able to modify Bootstrapious templates but you will need a basic knowledge and understanding of HTML and CSS. My templates are coded with care and their code is easy to read. Many of Bootstrapious fans use my themes as a way to learn Bootstrap, so there is really nothing to worry about.

In the next few paragraphs, I will try to describe how to do the most basic edits and start using my templates quickly.

1. Download a text editor
You can use a basic text editor like Notepad but I would like to recommend one of these three: Sublime Text, Atom or VS Code. All of them are very fast, they will highlight your HTML and CSS syntax and can be extended with many additional plugins. I personally use VS Code on Windows 10.

2. Extract the template files
All Bootstrapious downloads come as .zip files. To start working with the template files, extract them to your hard drive. Now you are ready to start with the modifications to the template.

3. Content changes
3.1. Basic HTML editing
To change a homepage of your new website, open an index.html file in your text editor and edit it there. 

3.2. Navigation
Do not forget to change links in your navbar appropriately. If you are not creating a one-page website, an active page needs to have a .active class in the navbar to be properly highlighted. Unfortunately, there is no easy way to do this automatically in HTML, so you have to do it manually. 

4. Appearance changes
4.1. A file to save the CSS changes
To add new CSS declarations or to update the current stylesheets, you can a) edit the original source file (e.g. style.default.css) or store your changes in a custom.css file (recommended).

The reason I encourage overriding the CSS in a separate file is because of the template's future updates. When a new update for the template is released, you can just overwrite the original files but your changes will remain intact in a separate custom.css file. Bootstrapious templates also use this approach in relation to Bootstrap framework - everything is kept in a separate file.

4.2. Change template colour
Almost every Bootstrapious template, both free and premium, come with 5 or 6 colour variants out of the box. To change to a different colour variant find <link href="css/style.default.css"> in your template's <head> and replace it with e.g. <link href="css/style.green.css">. This simple change will not only style all template's elements but also all standard Bootstrap features like pagination, blockquote, buttons, tabs and more.  

4.3. {LESS} files compilation
Premium templates contain also {LESS} source files. These are great to make bigger changes to the CSS stylesheets or to create your own colour variants super easily. You will need a compiler to compile {LESS} files to CSS after your changes. I use WinLess (Windows only), another good choice is Koala (multiplatform).

5. JavaScript settings and changes
Each template uses a different set of plugins and you can have a look at the complete list of the JS plugins in the readme.txt in your download file. Plugins are initialised and set in the front.js file located in a js folder. If you would like to tweak the settings of some particular plugin, consult again the readme file and check out plugin's project URL.

6. Additional components
6.1. Contact forms
Some templates contain also a skeleton for a contact form but usually, no backend code is included.

If you would like to choose PHP for your form's backend, I created a step-by-step tutorial on this topic. Before implementing this solution, make sure that your hosting supports PHP 5.3+.

6.2. Google maps
Some templates also come with Google maps sections or pages. From 2017, the Google maps need an API key to work correctly on your website. In some templates, an API key is provided but it is limited to local development and Bootstrapious.com domain, so you will have to generate it for your production usage anyway. To get your Google maps API head here. When you have your API key ready, just paste it to your Google maps JS call as in the following example. 

Html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu5nZKbeK-WHQ70oqOWo-_4VmwOwKP9YQ"></script>
You can find more info about Google maps and their integration to my templates in my Google maps tutorial.

6.3. Social icons
Would like to have Social icons on your page? Many of my Bootstrap templates have the icons already prepared, you just need to give them life.

There are two easy solutions. The first is to add links to social network sharing scripts, find out more about Social icons and share URLs in my tutorial. I recommend this solution as it will not add any additional data load to your website and everything will be nice and swift.

The second solutions are SumoMe's share buttons. Find out more about SumoMe Share installation.

6.4. Collecting emails
Many of my free Bootstrap themes also contain a form to collect email addresses. The form is not set for any email provider but its setup is very easy and straightforward. One of the most common emailing providers is MailChimp. More info on Bootstrap and MailChimp integration in my tutorial. 

6.5. Icon fonts
Almost every Bootstrap template you will find here uses Font Awesome icon font. This icon set contains almost 700 useful icons. To find out what these are, check out Font Awesome cheat sheet. I also use icon sets from Pixeden or Flat Icons. If you would want to add some more icons or change an icon style a bit, have a look at my curated list of free icon fonts.