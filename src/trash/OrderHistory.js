import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

const StyledTreeItem = (props) => {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
    return (
        <div>
          <TreeItem
              label={
                <div className={classes.labelRoot}>
                  <LabelIcon color="inherit" className={classes.labelIcon} />
                  <Typography variant="body2" className={classes.labelText}>
                    {labelText}
                  </Typography>
                  <Typography variant="caption" color="inherit">
                    {labelInfo}
                  </Typography>
                </div>
              }
              style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
              }}
              classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
              }}
              {...other}
          />
        </div>
    );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function OrderTreeView(props) {
  const classes = useStyles();
  const {products_by_order, history_orders, product_info, department_info} = props;
  return (
      <TreeView
          defaultExpanded={['1']}
          className={classes.root}
          defaultCollapseIcon={<ArrowDropDownIcon/>}
          defaultExpandIcon={<ArrowRightIcon/>}
          defaultEndIcon={<div style={{width: 24}}/>}
      >
        {history_orders != [] && history_orders.map(order => <StyledTreeItem
             nodeId={order} labelText= {`OrderID ${order}`} labelIcon={Label}>
          {products_by_order[order] != null && products_by_order[order].map(product => <StyledTreeItem
              nodeId={product}
              labelText={product_info[product] != null && product_info[product].product_name}
              labelIcon={LocalOfferIcon}
              labelInfo={products_by_order[product_info[product]] != null && department_info[product_info[product].department_id]}
              color="#3c8039"
              bgColor="#e6f4ea"
          />)}

        </StyledTreeItem>)}

      </TreeView>
  );
}

