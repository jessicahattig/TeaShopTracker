import React from "react";
import NewTeaForm from "./NewTeaForm";
import TeaList from "./TeaList";
import TeaDetail from "./TeaDetail";
import EditTeaForm from "./EditTeaForm";

class TeaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedTea: null,
      editing: false,
      mainTeaList: []
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }))
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({
      mainTeaList: newMainTeaList,
      formVisibleOnPage: false
    })
  }

  handleEditingTea = (editedTea) => {
    const editedMainTeaList = this.state.mainTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(editedTea);
    this.setState({
      mainTeaList: editedMainTeaList,
      editing: false,
      selectedTea: null
    })
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.mainTeaList.find(tea => tea.id === id);
    this.setState({ selectedeTea: selectedTea })
  }

  handleDeletingTea = (id) => {
    const newMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== id);
    this.setState({
      mainTeaList: newMainTeaList,
      selectedTea: null
    })
  }

  handleUpdateTeaInventory = (teaToUpdate, delta) => {
    const updatedInventory = teaToUpdate.inventory + delta;
    
    if (updatedInventory >= 1 && updatedInventory <= 100) {
      const updatedTea = { ...teaToUpdate, inventory: updatedInventory };
      
      const newMainTeaList = this.state.mainTeaList
        .filter(tea => tea.id !== teaToUpdate.id)
        .concat(updatedTea);
  
      this.setState({
        mainTeaList: newMainTeaList,
        selectedTea: updatedTea
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTeaForm tea={this.state.selectedTea}
                                              onEditTea={this.handleEditingTea} />
      buttonText = "Back to Tea List"
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail tea={this.state.selectedTea}
                                            onClickingDelete={this.handleDeletingTea}
                                            onClickingEdit={this.handleEditClick}
                                            onClickingUpdateUrgency={this.handleUpdateTeaUrgency} />
      buttonText = "Back to Tea List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList} />
      buttonText = "Back to Tea List"
    } else {
      currentlyVisibleState = <TeaList teaList={this.state.mainTeaList}
                                          onTeaSelection={this.handleChangingSelectedTea} />
      buttonText = "Add New Tea"
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default TeaControl;