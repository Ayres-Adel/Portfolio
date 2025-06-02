import React from 'react';
import '../styles/InfiniteScroll.css';

const InfiniteScroll = () => {
  return (
    <div className="infinite-scroll-container">
      <div className='tag-list'>
        <div className='inner'>
          <div className='tag'>
            <i className="fas fa-code"></i> {/* Code icon */}
            CodeWithPassion
          </div>
          <div className='tag'>
            <i className="fas fa-laptop-code"></i> {/* Laptop code icon */}
            BuildTheFuture
          </div>
          <div className='tag'>
            <i className="fas fa-cogs"></i> {/* Cogs icon */}
            ThinkLikeAProgrammer
          </div>
          <div className='tag'>
            <i className="fas fa-brain"></i> {/* Brain icon */}
            LogicAndCreativity
          </div>
          <div className='tag'>
            <i className="fas fa-terminal"></i> {/* Terminal icon */}
            HelloWorld
          </div>
          <div className='tag'>
            <i className="fas fa-code"></i>
            CodeWithPassion
          </div>
          <div className='tag'>
            <i className="fas fa-laptop-code"></i>
            BuildTheFuture
          </div>
          <div className='tag'>
            <i className="fas fa-cogs"></i>
            ThinkLikeAProgrammer
          </div>
          <div className='tag'>
            <i className="fas fa-brain"></i>
            LogicAndCreativity
          </div>
          <div className='tag'>
            <i className="fas fa-terminal"></i>
            HelloWorld
          </div>
        </div>
        <div className='fade'></div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
