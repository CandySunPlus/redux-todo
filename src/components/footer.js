import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { TodoFilters } from '../actions/todos'

const FILTER_TITLES = {
  [TodoFilters.SHOW_ALL]: 'All',
  [TodoFilters.SHOW_COMPLETED]: 'Completed',
  [TodoFilters.SHOW_ACTIVE]: 'Active'
};

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.oneOf([
      TodoFilters.SHOW_ALL,
      TodoFilters.SHOW_COMPLETED,
      TodoFilters.SHOW_ACTIVE
    ]).isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  };

  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount <= 1 ? 'item' : 'items';

    return (
      <span className="todo-count">
        <strong>{activeCount}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter) {
    const { filter: selectedFilter, onShow } = this.props;
    return (
      <a className={classnames({
          selected: filter === selectedFilter
        })}
        style={{cursor: 'pointer'}}
        onClick={() => onShow(filter)}>
        {FILTER_TITLES[filter]}
      </a>
    );
  }

  renderFilterList() {
    let filterLinks = [];
    for (let filterName of Object.keys(TodoFilters)) {
      let filter = TodoFilters[filterName];
      filterLinks.push(<li key={filterName}>{this.renderFilterLink(filter)}</li>);
    }
    return (
      <ul className="filters">
        {filterLinks}
      </ul>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
          onClick={onClearCompleted}>
          Clear completed
        </button>
      );
    }
  }

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        {this.renderFilterList()}
        {this.renderClearButton()}
      </footer>
    );
  }
}
