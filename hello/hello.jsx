var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

function $(s) { return document.getElementById(s) }

const Hello = React.createClass({
    render: function() {
        return <span>Hello {this.props.what}</span> ;
    }
});

const AddList = React.createClass({
    render: function() {
        var createItem = function(item) {
            return <li key={item.id}>{item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

const TODO = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function() {
        return (
            <div>
                <h3>TODO (from the official example)</h3>
                <AddList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

const MarkdownEditor = React.createClass({
    getInitialState: function() {
        return {value: 'This is an **example** here!'};
    },
    handleChange: function() {
        this.setState({value: this.refs.textarea.value});
    },
    rawMarkup: function() {
        return { __html: marked(this.state.value, {sanitize: true}) };
    },
    render: function() {
        return (
            <div className="MarkdownEditor">
                <textarea
                    ref="textarea"
                    onChange={this.handleChange}
                    defaultValue={this.state.value} />
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.rawMarkup()}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <a href="https://www.youtube.com/watch?v=YQHsXMglC9A"><h1>Hello</h1></a>,
    $('example')
);

ReactDOM.render(<Hello what="from the other side..." />, $('box'));
ReactDOM.render(<TODO />, $('todo'));
ReactDOM.render(<MarkdownEditor />, $('markdown'));
