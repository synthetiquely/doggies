import { connect } from 'react-redux';
import { Dogs } from '../../components/Dogs/Dogs';
import { selectPagiableDogs } from '../../store/selectors/selectors';
import { fetchBreeds } from '../../store/actions/breedsActions';
import { setPaginationOffset } from '../../store/actions/helpersActions';

const mapStateToProps = state => ({
  dogs: selectPagiableDogs(state),
  breeds: state.breeds.breeds,
  offset: state.helpers.offset,
  limit: state.helpers.limit,
  isLoading: state.helpers.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchBreeds: () => dispatch(fetchBreeds()),
  setPaginationOffset: offset => dispatch(setPaginationOffset(offset)),
});

export const DogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dogs);
