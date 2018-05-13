import { connect } from 'react-redux';
import { Dogs } from '../../components/Dogs/Dogs';
import { selectPagiableDogs } from '../../store/selectors/selectors';
import { setSelectedDog } from '../../store/actions/dogsActions';
import { setPaginationOffset } from '../../store/actions/helpersActions';

const mapStateToProps = state => ({
  dogs: selectPagiableDogs(state),
  breeds: state.breeds.breeds,
  offset: state.helpers.offset,
  limit: state.helpers.limit,
  isLoading: state.helpers.isLoading,
});

const mapDispatchToProps = dispatch => ({
  setPaginationOffset: offset => dispatch(setPaginationOffset(offset)),
  setSelectedDog: dog => dispatch(setSelectedDog(dog)),
});

export const DogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dogs);
