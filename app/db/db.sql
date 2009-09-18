-- phpMyAdmin SQL Dump
-- version 2.7.0-pl2
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Sep 17, 2009 at 05:28 PM
-- Server version: 5.0.19
-- PHP Version: 5.1.6
-- 
-- Database: `Portfolio_v1`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `photos`
-- 

CREATE TABLE `photos` (
  `id` int(255) NOT NULL auto_increment,
  `url` varchar(255) NOT NULL,
  `project_id` int(255) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

-- 
-- Dumping data for table `photos`
-- 

INSERT INTO `photos` VALUES (1, '/images/work/blend_full.jpg', 1);
INSERT INTO `photos` VALUES (2, '/images/work/blend_full2.jpg', 1);
INSERT INTO `photos` VALUES (3, '/images/work/encompass_full.jpg', 2);
INSERT INTO `photos` VALUES (4, '/images/work/encompass_full2.jpg', 2);
INSERT INTO `photos` VALUES (5, '/images/work/encompass_full3.jpg', 2);
INSERT INTO `photos` VALUES (6, '/images/work/encompass_full4.jpg', 2);
INSERT INTO `photos` VALUES (7, '/images/work/johnny_full.jpg', 3);
INSERT INTO `photos` VALUES (8, '/images/work/johnny_full2.jpg', 3);
INSERT INTO `photos` VALUES (9, '/images/work/johnny_full3.jpg', 3);
INSERT INTO `photos` VALUES (10, '/images/work/hawaiian_full.jpg', 4);
INSERT INTO `photos` VALUES (11, '/images/work/hawaiian_full2.jpg', 4);
INSERT INTO `photos` VALUES (12, '/images/work/hawaiian_full3.jpg', 4);
INSERT INTO `photos` VALUES (13, '/images/work/kurt_full.jpg', 5);
INSERT INTO `photos` VALUES (14, '/images/work/kurt_full2.jpg', 5);
INSERT INTO `photos` VALUES (15, '/images/work/kurt_full3.jpg', 5);
INSERT INTO `photos` VALUES (16, '/images/work/kurt_full4.jpg', 5);
INSERT INTO `photos` VALUES (17, '/images/work/logicbored_full.jpg', 6);
INSERT INTO `photos` VALUES (18, '/images/work/logicbored_full2.jpg', 6);
INSERT INTO `photos` VALUES (19, '/images/work/salmonStreet_full.jpg', 7);
INSERT INTO `photos` VALUES (20, '/images/work/salmonStreet_full2.jpg', 7);
INSERT INTO `photos` VALUES (21, '/images/work/salmonStreet_full3.jpg', 7);
INSERT INTO `photos` VALUES (22, '/images/work/webraising_full.jpg', 8);
INSERT INTO `photos` VALUES (23, '/images/work/webraising_full2.jpg', 8);
INSERT INTO `photos` VALUES (24, '/images/work/webraising_full3.jpg', 8);
INSERT INTO `photos` VALUES (25, '/images/work/webraising_full4.jpg', 8);

-- --------------------------------------------------------

-- 
-- Table structure for table `project_technology`
-- 

CREATE TABLE `project_technology` (
  `id` int(255) NOT NULL auto_increment,
  `project_id` int(255) NOT NULL,
  `technology_id` int(255) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

-- 
-- Dumping data for table `project_technology`
-- 

INSERT INTO `project_technology` VALUES (1, 1, 1);
INSERT INTO `project_technology` VALUES (2, 1, 2);
INSERT INTO `project_technology` VALUES (3, 1, 3);
INSERT INTO `project_technology` VALUES (4, 1, 4);
INSERT INTO `project_technology` VALUES (5, 1, 5);
INSERT INTO `project_technology` VALUES (13, 3, 1);
INSERT INTO `project_technology` VALUES (7, 2, 1);
INSERT INTO `project_technology` VALUES (8, 2, 2);
INSERT INTO `project_technology` VALUES (9, 2, 3);
INSERT INTO `project_technology` VALUES (10, 2, 4);
INSERT INTO `project_technology` VALUES (11, 2, 5);
INSERT INTO `project_technology` VALUES (24, 3, 15);
INSERT INTO `project_technology` VALUES (14, 3, 2);
INSERT INTO `project_technology` VALUES (15, 3, 3);
INSERT INTO `project_technology` VALUES (16, 3, 4);
INSERT INTO `project_technology` VALUES (17, 3, 7);
INSERT INTO `project_technology` VALUES (18, 4, 1);
INSERT INTO `project_technology` VALUES (19, 4, 2);
INSERT INTO `project_technology` VALUES (20, 4, 5);
INSERT INTO `project_technology` VALUES (21, 4, 7);
INSERT INTO `project_technology` VALUES (22, 1, 12);
INSERT INTO `project_technology` VALUES (23, 2, 12);
INSERT INTO `project_technology` VALUES (25, 4, 12);
INSERT INTO `project_technology` VALUES (26, 5, 1);
INSERT INTO `project_technology` VALUES (27, 5, 2);
INSERT INTO `project_technology` VALUES (28, 5, 3);
INSERT INTO `project_technology` VALUES (29, 5, 4);
INSERT INTO `project_technology` VALUES (30, 5, 15);
INSERT INTO `project_technology` VALUES (31, 6, 1);
INSERT INTO `project_technology` VALUES (32, 6, 2);
INSERT INTO `project_technology` VALUES (33, 6, 3);
INSERT INTO `project_technology` VALUES (34, 6, 4);
INSERT INTO `project_technology` VALUES (35, 6, 9);
INSERT INTO `project_technology` VALUES (36, 6, 13);
INSERT INTO `project_technology` VALUES (37, 7, 10);
INSERT INTO `project_technology` VALUES (38, 7, 16);
INSERT INTO `project_technology` VALUES (39, 7, 17);
INSERT INTO `project_technology` VALUES (40, 7, 18);
INSERT INTO `project_technology` VALUES (41, 7, 19);
INSERT INTO `project_technology` VALUES (42, 7, 20);
INSERT INTO `project_technology` VALUES (43, 8, 1);
INSERT INTO `project_technology` VALUES (44, 8, 2);
INSERT INTO `project_technology` VALUES (45, 8, 3);
INSERT INTO `project_technology` VALUES (46, 8, 8);
INSERT INTO `project_technology` VALUES (47, 8, 12);
INSERT INTO `project_technology` VALUES (48, 8, 14);

-- --------------------------------------------------------

-- 
-- Table structure for table `projects`
-- 

CREATE TABLE `projects` (
  `id` int(255) NOT NULL auto_increment,
  `title` varchar(255) NOT NULL,
  `selector` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `overview` text NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

-- 
-- Dumping data for table `projects`
-- 

INSERT INTO `projects` VALUES (1, 'Blend Messenger', 'blend', 'http://www.adelineinteractive.com/blend', 'Designer / Developer', 'October 2008', '<p>Blend Messenger is an Ajax/PHP-based online-based instant messenger project motivated by the highly collaborative nature of our three-person development team. We needed a way to communicate our progress on various projects to each other throughout all stages of development.</p>\r\n\r\n<p>This project allowed me to implement Object-Oriented Programming practices in a highly Asynchronous JavaScript-based application.</p>');
INSERT INTO `projects` VALUES (3, 'Johnny Le Films', 'johnny', 'http://www.johnnylefilms.com/', 'Front-End Developer / Graphic Designer', 'January 2008', '<p>Johnny Le is an aspiring Portland filmmaker, producer, and director. He needed a way to showcase his creative digital pieces in a medium that was equally as engaging.</p>\r\n<p>I was a part of a two person team in charge of producing a unified identity that encompassed the professional quality and personality apparent throughout Johnny Le&rsquo;s work. A dynamic portfolio site that featured a gallery along with a custom blog was made to provide world wide exposure to the Johnny Le Films brand.</p>');
INSERT INTO `projects` VALUES (2, 'Encompass Institute', 'encompass', 'http://www.encompassinstitute.org/', 'Designer / Developer', 'October 2008', '<p>The EnCompass Institute is a non-profit organization based in Portland, Oregon promoting the child development theory of Natural Learning Rhythms. Their previous identity and website were not conveying the organization&rsquo;s current mission and philosophy to their target audience. Over the course of an eleven week term, I was a part of a five person team in charge of implementing a complete redesign of both a new identity and website for this growing organization.</p>\r\n\r\n<p>I placed high priority in giving in-depth consideration to the brand&rsquo;s redefinition and implementing Web Standards based practices to produce a flexible end product that met the organization&rsquo;s business objectives.</p>');
INSERT INTO `projects` VALUES (4, 'Hawaiian Numbers', 'hawaiian', 'http://www.adelineinteractive.com/Jessica/hawaiianNumbers/', 'Designer / Developer', 'September 2008', '<p>Hawaiian Numbers is a e-Learning project targeted at students of the Hawaii Public School System where the Hawaiian language is taught to grades K-9. The goal of this project was to give students a visual way of learning to count to five in Hawaiian through letter-based puzzles to reinforce spelling and counting skills.</p>\r\n<p>The Flash-based puzzle game allows the users to practice learning the basic spelling in a visual way while an Ajax-based quiz available at the end aims to reinforce learning through a set of trivia questions.</p>');
INSERT INTO `projects` VALUES (5, 'Kurt Nishimura', 'kurt', 'http://www.kurtnishimura.com/', 'Web Designer / Developer', 'June 2008', '<p>Kurt Nishimura is a talented music video director and fellow Hawaii native now based in Portland, OR. He has done work for various artists across the nation and won various awards for his work featured on MTVU, VH1, and most recently a commercial spot on the 2009 Grammy&rsquo;s for the Lincoln MKS Challenge.</p>\r\n<p>Given his widespread exposure, it was vital that his website showcased the expressive nature of his work and personality. I designed and developed a dynamic database-driven  portfolio site to highlight his music video work.</p>');
INSERT INTO `projects` VALUES (6, 'LogicBored Blog', 'logicbored', 'http://www.adelineinteractive.com/logicbored/', 'Designer / Developer', 'June 2008', '<p>LogicBored is the collective thoughts of interactive designers and developers, Kellan Craddock and Jessica Tsuji. This Wordpress based blog was designed and developed to facilitate the need to express and reflect upon our perspectives of the Interactive Industry.</p>');
INSERT INTO `projects` VALUES (7, 'Salmon Street Energy Project', 'salmonStreet', 'http://www.n2e.org/imby/', 'Pre-Production Project Manager', 'June 2009', '<p>Neighborhood Natural Energy (N2e) is a non-profit organization focused on promoting and developing community-wide energy solutions. Their Salmon Street Energy Project was a district energy based solution currently in development for a 14-home Southeast Portland neighborhood on Salmon Street.</p>\r\n<p>I managed a team of four during the pre-production stage of their promotional website for the Salmon Street Project. The team&rsquo;s objectives were to define an integrated plan through the creation of creative briefs, technical specification documents, sitemaps, wireframes, and design comps to achieve their business objectives for the Salmon Street project. This plan served as a guide for the development of the Salmon Street Energy site as well as a template for future N2e projects through implementation of not only a promotional site but also various social media outlets.</p>');
INSERT INTO `projects` VALUES (8, 'WebRaising Event at The Art Institute of Portland', 'webraising', 'http://www.aipdwebraising.com/', 'Project Lead / Designer / Developer', 'May 2008, April 2009', '<p>Every year the Web Design and Interactive Media department holds a WebRaising Event in which students create a site for a local non-profit organization in a day. I had participated in the 2007, 2008, and 2009 events and was given the opportunity to lead the development of the event&rsquo;s promotional site.</p>\r\n<p>The objectives of the site were not only to promote the event to local organizations but also to encourage students to get involved in the one-day events. The XML-driven dynamic site featured integration with social media which highlighted past events.</p>');

-- --------------------------------------------------------

-- 
-- Table structure for table `technologies`
-- 

CREATE TABLE `technologies` (
  `id` int(255) NOT NULL auto_increment,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

-- 
-- Dumping data for table `technologies`
-- 

INSERT INTO `technologies` VALUES (1, '(X)HTML');
INSERT INTO `technologies` VALUES (2, 'CSS');
INSERT INTO `technologies` VALUES (3, 'PHP');
INSERT INTO `technologies` VALUES (4, 'MySQL');
INSERT INTO `technologies` VALUES (5, 'Ajax');
INSERT INTO `technologies` VALUES (6, 'Zend Framework');
INSERT INTO `technologies` VALUES (7, 'Flash');
INSERT INTO `technologies` VALUES (8, 'XML');
INSERT INTO `technologies` VALUES (9, 'Wordpress');
INSERT INTO `technologies` VALUES (10, 'Information Architecture');
INSERT INTO `technologies` VALUES (12, 'JavaScript (jQuery)');
INSERT INTO `technologies` VALUES (13, 'JavaScript (MooTools)');
INSERT INTO `technologies` VALUES (14, 'LightBox / Prototype / Scriptaculous ');
INSERT INTO `technologies` VALUES (15, 'JavaScript');
INSERT INTO `technologies` VALUES (16, 'creative briefs');
INSERT INTO `technologies` VALUES (17, 'sitemaps');
INSERT INTO `technologies` VALUES (18, 'wireframes');
INSERT INTO `technologies` VALUES (19, 'design comps');
INSERT INTO `technologies` VALUES (20, 'technical documentation');

-- --------------------------------------------------------

-- 
-- Table structure for table `updates`
-- 

CREATE TABLE `updates` (
  `id` int(255) NOT NULL auto_increment,
  `date` varchar(255) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- 
-- Dumping data for table `updates`
-- 

INSERT INTO `updates` VALUES (1, 'September 13, 2009', 'update1.jpg', 'All the major functionality for Portfolio V1 is complete! Now, it''s just a matter of putting in some content and prepping for the big day. It''s all starting to feel a bit surreal.');
