import { InMemoryDbService } from "angular-in-memory-web-api";

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    let resources = [
      {
        id: 1,
        name: "JK"
      },
      {
        id: 2,
        name: "Siva"
      }
    ];

    return {
      resources: resources
    };
  }
}
