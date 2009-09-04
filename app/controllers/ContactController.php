<?php
	class ContactController extends Zend_Controller_Action
	{
		public function init() {
			$this->session_input = new Zend_Session_Namespace('session_input');
			$this->view->name = isset($this->session_input->name) ? $this->session_input->name : "Your Name";
			$this->view->email = isset($this->session_input->email) ? $this->session_input->email : "Your Email Address";
			$this->view->message = isset($this->session_input->message) ? $this->session_input->message : "Your Message";
			$this->view->success = isset($this->session_input->success) ? $this->session_input->success : "";
			
			$this->session_alert = new Zend_Session_Namespace('session_alert');
			$this->view->alert = isset($this->session_alert->alert) ? $this->session_alert->alert : "";
			//$this->Model = new Model();
			//$this->_helper->layout->setLayout('edit');
			
			$this->view->page = "contact";
		}
		
		public function indexAction()
		{

		}
		
		public function mailAction()
		{
/*
			$str_validator = new Zend_Validate_StringLength( 5 );
			$email_validator = new Zend_Validate_EmailAddress();
*/
			
			//POST array only needed for values that need validation
			$postArray = array(
				'Name'=>$_POST['name'],
				'Email'=>$_POST['email'],
				'Message'=>$_POST['message']
			);
			
			$this->session_input->name = $postArray['Name'];
			$this->session_input->email = $postArray['Email'];
			$this->session_input->message = $postArray['Message'];
			
			//Mail Helper
			$message_helper = $this->_helper->Message;
			$validate = $message_helper->validate( $postArray );
			
			if( $validate ) {
				$this->session_alert->alert = $validate;
				
			} else {
				Zend_Session::namespaceUnset('session_alert');
				$this->session_input->success = 'success';
			}
				
			header( "Location: /contact" );
		}
		
		public function anotherAction()
		{
			Zend_Session::namespaceUnset('session_input');
			header( "Location: /contact" );
		}
		
	}
	
?>