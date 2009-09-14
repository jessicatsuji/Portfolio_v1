<?php
	require_once( '../app/models/ProjectsModel.php' );
	require_once( '../app/models/PhotosModel.php' );
	require_once( '../app/models/TechnologiesModel.php' );
	require_once( '../app/models/ProjectTechnologyModel.php' );
	
	class WorkController extends Zend_Controller_Action
	{
		public function init() {
			//$this->session_alert = new Zend_Session_Namespace('');
			//$this->Model = new Model();
			//$this->_helper->layout->setLayout('edit');
			
			$this->projects_model = new ProjectsModel( );
			$this->photos_model = new PhotosModel( );
			$this->technologies_model = new TechnologiesModel( );
			$this->project_technology_model = new ProjectTechnologyModel( );
			
			$this->technologies = $this->technologies_model->getAll( );
			
			$this->view->page = "work";
		}
		
		public function indexAction()
		{
			$projects = $this->projects_model->getAll( );
			$openProject = ( $this->_request->getParam('project') ) ? $this->_request->getParam('project') : "";
			
			foreach ( $projects as &$proj ) {
				$technologies = $this->project_technology_model->getAllByProject ( array( $proj['id'] ) );
				
				$proj['tech'] = array();
				foreach ( $technologies as $technology ) {
					$tech = $this->technologies_model->getOne( array( $technology['technology_id'] ) );
					array_push( $proj['tech'], $tech['name'] );
				}
				
				$photos = $this->photos = $this->photos_model->getAllByProject( array( $proj['id'] ) );
				$proj['photos'] = $photos;
				
				$proj['open'] = ($proj['selector'] == $openProject) ? 'open' : "";
			}
			$this->view->projects = $projects;
		}
		
	}
	
?>