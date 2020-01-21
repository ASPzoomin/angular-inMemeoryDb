import { InMemoryDbService } from "angular-in-memory-web-api";

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    let resources = [
      {
        id: 1,
        name: "Sreekar"
      },
      {
        id: 2,
        name: "JK"
      },
      {
        id: 3,
        name: "Siva"
      }
    ];

    return {
      resources: resources
    };
  }
}
