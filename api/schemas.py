from datetime import datetime
from pydantic import BaseModel

class ProjectBase(BaseModel):
    project_name: str
    students: str
    area: str
    create_date: str
    description: str
    techs: str
    contact: str
    finish_ratio: int
    status: str

class ProjectAdd(ProjectBase):
    project_id: str
    
    class Config:
        orm_mode = True

class Project(ProjectAdd):
    id: int
    
    class Config:
        orm_mode = True
        
class UpdateProject(BaseModel):
    project_name: str
    students: str
    area: str
    description: str
    techs: str
    finish_ratio: int
    status: str
    class Config:
        orm_mode = True