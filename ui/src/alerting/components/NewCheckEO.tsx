// Libraries
import React, {FunctionComponent, useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, WithRouterProps} from 'react-router'

// Components
import {Overlay, SpinnerContainer, TechnoSpinner} from '@influxdata/clockface'
import CheckEOHeader from 'src/alerting/components/CheckEOHeader'
import TimeMachine from 'src/timeMachine/components/TimeMachine'

// Actions
import {
  updateCheck,
  setCurrentCheck,
  updateCurrentCheck,
  createCheck,
} from 'src/alerting/actions/checks'
import {setActiveTimeMachine} from 'src/timeMachine/actions'

// Utils
import {createView} from 'src/shared/utils/view'
import {getActiveTimeMachine} from 'src/timeMachine/selectors'

// Types
import {
  Check,
  AppState,
  RemoteDataState,
  XYViewProperties,
  DashboardDraftQuery,
} from 'src/types'
import {DEFAULT_CHECK} from 'src/alerting/constants'
import {TimeMachineEnum} from 'src/timeMachine/constants'

interface DispatchProps {
  updateCheck: typeof updateCheck
  setCurrentCheck: typeof setCurrentCheck
  updateCurrentCheck: typeof updateCurrentCheck
  onSetActiveTimeMachine: typeof setActiveTimeMachine
  createCheck: typeof createCheck
}

interface StateProps {
  check: Partial<Check>
  status: RemoteDataState
  query: DashboardDraftQuery
}

type Props = DispatchProps & StateProps & WithRouterProps

const NewCheckOverlay: FunctionComponent<Props> = ({
  onSetActiveTimeMachine,
  updateCurrentCheck,
  setCurrentCheck,
  createCheck,
  query,
  params,
  router,
  status,
  check,
}) => {
  useEffect(() => {
    setCurrentCheck(RemoteDataState.Done, DEFAULT_CHECK)
    const view = createView<XYViewProperties>('xy')
    onSetActiveTimeMachine(TimeMachineEnum.Alerting, {
      view,
      activeTab: 'queries',
    })
  }, [])

  const handleUpdateName = (name: string) => {
    updateCurrentCheck({name})
  }

  const handleClose = () => {
    router.push(`/orgs/${params.orgID}/alerting`)
  }

  const handleSave = () => {
    // save view as view
    // put view.id on check.viewID
    createCheck({...check, query})
    handleClose()
  }

  return (
    <Overlay visible={true} className="veo-overlay">
      <div className="veo">
        <SpinnerContainer
          spinnerComponent={<TechnoSpinner />}
          loading={status || RemoteDataState.Loading}
        >
          <CheckEOHeader
            key={check && check.name}
            name={check && check.name}
            onSetName={handleUpdateName}
            onCancel={handleClose}
            onSave={handleSave}
          />
          <div className="veo-contents">
            <TimeMachine />
          </div>
        </SpinnerContainer>
      </div>
    </Overlay>
  )
}

const mstp = (state: AppState): StateProps => {
  const {
    checks: {
      current: {check, status},
    },
  } = state

  const {draftQueries} = getActiveTimeMachine(state)

  return {check, status, query: draftQueries[0]}
}

const mdtp: DispatchProps = {
  updateCheck: updateCheck,
  setCurrentCheck: setCurrentCheck,
  updateCurrentCheck: updateCurrentCheck,
  onSetActiveTimeMachine: setActiveTimeMachine,
  createCheck: createCheck,
}

export default connect<StateProps, DispatchProps, {}>(
  mstp,
  mdtp
)(withRouter(NewCheckOverlay))
