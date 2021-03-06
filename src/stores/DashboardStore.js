import AsyncApiStore from 'stores/AsyncApiStore'
import { action, runInAction } from 'mobx'
import DashboardService from 'services/DashboardService'
import Dashboard from 'models/Dashboard'

class DashboardStore extends AsyncApiStore {
  constructor(userId) {
    super()

    this.dashboard = new Dashboard()
    this.dashboardService = new DashboardService()
    this.id = userId
    this.init()
  }

  @action
  init() {
    this.loadDashboard(this.id)
  }

  @action
  async loadDashboard(userId) {
    try {
      const response = await this.dashboardService.getDataDashboard(userId)

      runInAction(() => {
        this.clearError()
        this.onSuccessRequest()
        this.dashboard.setTotalPetsAdopted(response.totalPetsAdopted)
        this.dashboard.setTotalVolunteersPetsOwner(response.totalVolunteersPetsOwner)
        this.dashboard.setTotalVolunteersPetsCare(response.totalVolunteersPetsCare)
        this.dashboard.setTotalPetsForAdoption(response.totalPetsForAdoption)
        this.dashboard.setTotalVeterinaryCared(response.totalVeterinaryCared)
        this.dashboard.setTotalPetsAdopter(response.totalPetsAdopter)
      })
    } catch (e) {
      runInAction(() => {
        console.log(e)
        this.finishRequest()
        this.setServerError()
      })
    }
  }
}

export default DashboardStore
