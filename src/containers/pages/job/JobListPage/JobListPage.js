import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import {connect} from 'react-redux';
import HeaderSearchFilter from '../../../../components/organisms/joblist/HeaderSearchFilter';
import ScrollVertical from '../../../../components/organisms/scroller/ScrollVertical';
import {fetch_list_sg} from '../../../../configs/redux/actions/jobActions';
import screens from '../../../../configs/routes/screens';
import MainContainers from '../../../templates/MainContainers';

class JobListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadMore: false,
    };
  }

  goTo = (screen, params) => {
    this.props.navigation.push(screen, params);
  };

  componentDidMount = () => {
    this.handleRefresh();
  };

  handleRefresh = () => {
    this.handleFetch({refresh: true});
  };

  handleMore = () => {
    this.handleFetch({refresh: false});
  };

  handleFetch = ({params, refresh}) => {
    const {fetch_list_sg, list, current} = this.props;
    console.log(`list.meta`, list.meta);
    this.setState({loadMore: true});
    fetch_list_sg({
      refresh,
      params: {
        page: refresh ? 1 : list.meta.page + 1,
        ...params,
      },
      onSuccess: () => {
        setTimeout(() => {
          this.setState({loadMore: false});
        }, 1000);
      },
    });
  };

  render() {
    const {list} = this.props;
    console.log(`list`, list);
    return (
      <MainContainers noScroll={true}>
        <View>
          <ScrollVertical
            ListHeaderComponent={
              <HeaderSearchFilter onFetch={this.handleFetch} />
            }
            contentContainerStyle={{
              paddingHorizontal: 13,
              marginTop: 13,
              paddingBottom: Platform.select({
                ios: 100,
                android: 150,
              }),
            }}
            component={'CardJobList'}
            data={list.data || []}
            itemProps={{onPress: id => this.goTo(screens.detail_job, {id})}}
            isLoadingMore={this.state.loadMore}
            loadMore={this.handleMore}
            onRefresh={this.handleRefresh}
          />
        </View>
      </MainContainers>
    );
  }
}

const mapState = ({jobReducer}) => ({
  list: jobReducer.list,
  current: jobReducer.current,
});

const mapDispatch = {
  fetch_list_sg,
};

export default connect(mapState, mapDispatch)(JobListPage);
