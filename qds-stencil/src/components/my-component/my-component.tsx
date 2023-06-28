import { Component,Method,Prop, Watch, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component-stencil',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class QDS_stencil {
  
  @Prop() name: string;
  @Prop() options: string;
  private _states: string[]
  @Prop() states: string[] | string = [];
  // = ["Karnataka", "Maharashtra", "Delhi", "Goa"];

  @Watch("states")
  statesWatcher(newStates) {
    typeof newStates === "string" ? this._states = JSON.parse(newStates) : this._states = newStates
  }
  @Method()
  async setStates(newStates) {
    // typeof newStates === "string" ? this._states = JSON.parse(newStates) : this._states = newStates
    this.states = newStates
  }


  componentWillLoad() {
    this.statesWatcher(this.states)
  }




  render() {
    return(
      <div>
        <se-button option="raised" color="primary" icon="new_project">{this.name}</se-button>
        
        <se-dropdown alignment="left">
          <se-button slot="trigger">{this.name}</se-button>
              <se-list option="dropdown">
              <se-list-item item={this.options}></se-list-item>
              <se-list-item item="My Site 2"></se-list-item>
              <se-list-item item="My Site 3"></se-list-item>
              </se-list>
        </se-dropdown>

        <se-form-field label="This is my custom Checkbox.It is unique." type="checkbox">
            <se-checkbox value="checkbox-value"></se-checkbox>
        </se-form-field>
        <se-form-field label="Input">
            <input type="text" />
        </se-form-field>
        <se-form-field label="Select"  type="select">
          <select>
            {this._states.map(state => <option>{state}</option>)}
          </select>
        </se-form-field>
        <se-form-field label="Input with icon">
            <div class="with-icon">
              <input type="search" />
        <se-icon size="small">action_search_stroke</se-icon>
            </div>
        </se-form-field>
        <se-form-field label="Autocomplete">
            <input list="marketSegmentList" />
            <datalist id="marketSegmentList">
              <option value="react"></option>
              <option value="stenciljs"></option>
              <option value="angular"></option>
              <option value="vuejs"></option>
              {/* {this._states.map(state => <option>{state}</option>)} */}
            </datalist>
        </se-form-field>
    </div>
    );
  }
}
