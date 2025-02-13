import PrintAreaRepository from '../../../domain/repositories/PrintAreaRepository';
import { KEY_STORAGE_NAME } from '../../config/Config';

export default class LocalStoragePrintAreaRepository extends PrintAreaRepository {
  constructor() {
    super();
    this.storageKey = KEY_STORAGE_NAME;
  }

  getAllAreas() {
    const areas = localStorage.getItem(this.storageKey);
    return areas ? JSON.parse(areas) : [];
  }

  getAreaByName(name) {
    const areas = this.getAllAreas();
    return areas.find((area) => area.name === name);
  }

  saveArea(area) {
    const areas = this.getAllAreas();
    const existingIndex = areas.findIndex((a) => a.name === area.name);
    existingIndex !== -1 ? (areas[existingIndex] = area) : areas.push(area);

    localStorage.setItem(this.storageKey, JSON.stringify(areas));
  }

  deleteArea(name) {
    let areas = this.getAllAreas();
    areas = areas.filter((area) => area.name !== name);

    localStorage.setItem(this.storageKey, JSON.stringify(areas));
  }
}
