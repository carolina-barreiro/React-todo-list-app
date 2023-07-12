import React from "react";
import "./modal.css";

function ModalEdit() {
    return (<div className="modal">
        <div className="modal-content">
            <div className="div-title">
                Modal title
            </div>
            <div className="modal-body">aqui</div>
        </div>
    </div>);
}

export default function Modal(props){
        if (!props.show) {
            return null;
        }
        console.log('aaaa');
        return (
          <div className="modal">
          <div className="modal-content">
              <div className="div-title">
                  Modal title
              </div>
              <div className="modal-body">aqui</div>
          </div>
      </div>
        );
    
}


/*
export default class Modal extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <ModalEdit/>
        );
    }
}


/*<div className="modal" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Save changes</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div> */


/*<div className="modal">
      <div className="modal-content">
          <div className="div-title">
              Modal title
          </div>
          <div className="modal-body">aqui</div>
      </div>
  </div>*/