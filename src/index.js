import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                content="Awesome blog post!"
                imgURL={faker.image.animals()}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                content="Way to go!"
                imgURL={faker.image.food()}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 8:30PM"
                content="Really love your blog!"
                imgURL={faker.image.people()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
