import React from 'react';
import MediaQuery from 'react-responsive';

import Score from 'game/Score.jsx';
import Board from 'game/Board.jsx';
import Stdout from 'game/Stdout.jsx';

const styles = {
    main: {
        height: 'calc(100vh - 60px)',
        width: '100vw',
        background: 'linear-gradient(#1EBCD0, #4285F4)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        alignItems: 'center',
    },
    board: {
        width: '70vw'
    },
    stdout: {
        width: '30vw'
    }
};

export default class Main extends React.Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.column}>
                    <Board style={styles.board} {... this.props}/>
                    <MediaQuery minHeight={500}>
                        <Stdout
                            style={styles.stdout}
                            stdout={this.props.stdout} />
                    </MediaQuery>
                </div>
                <MediaQuery minHeight={500}>
                    <Score
                        playerName={this.props.playerName}
                        score={this.props.score} />
                </MediaQuery>
            </div>
        );
    }
}
