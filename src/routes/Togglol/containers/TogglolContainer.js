/* @flow */
import { connect } from 'react-redux'  
import { fetchTimeEntries, setApiKey, fetchUserInfo, setApiKeyAndFetchUserInfo, requestCreateOrUpdateTimeEntry, requestDeleteTimeEntry } from '../modules/togglol'

import Togglol from '../components/Togglol'

import type { TimeEntryObject } from '../interfaces/togglol'
import type { ProjectObject } from '../interfaces/togglol'

const mapActionCreators: {fetchTimeEntries: Function, fetchUserInfo: Function, setApiKey: Function, setApiKeyAndFetchUserInfo: Function, requestCreateOrUpdateTimeEntry: Function, requestDeleteTimeEntry: Function} = {  
  fetchTimeEntries,
  fetchUserInfo,
  setApiKey,
  setApiKeyAndFetchUserInfo,
  requestCreateOrUpdateTimeEntry,
  requestDeleteTimeEntry
}

const mapStateToProps = (state): { time_entries: Array<TimeEntryObject>, data: Object } => ({  
  time_entries: state.togglol.time_entries,
  user_loaded: state.togglol.user_loaded,
  data: state.togglol.data
})

export default connect(mapStateToProps, mapActionCreators)(Togglol) 