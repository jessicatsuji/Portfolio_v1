<?php
	class IndexController extends Zend_Controller_Action
	{
		public function init() {
			//$this->session_alert = new Zend_Session_Namespace('');
			//$this->Model = new Model();
			//$this->_helper->layout->setLayout('edit');
			
			$this->view->page = "home";
		}
		
		public function indexAction()
		{

		}
		
	}
	
?>