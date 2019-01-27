import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddHiveButton from "./AddHiveButton";
import Button from '@material-ui/core/Button';
import HiveInputPrompt from "./HiveInputPrompt";
import Typography from "@material-ui/core/Typography/Typography";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        left: window.innerWidth*0.3,
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    label: {
        width: "100%",
        variant: "h1",
    },
});

class SimpleModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AddHiveButton triggerModal={this.handleOpen}/>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography className={this.props.classes.label} variant={"h4"}>
                            Create Hive
                        </Typography>
                        <HiveInputPrompt/>
                        <Button onClick={this.handleClose}> Close </Button>
                        <Button onClick={this.handleClose}> Submit </Button>
                    </div>
                </Modal>
            </div>
        );
    }
}



export default withStyles(styles)(SimpleModal);