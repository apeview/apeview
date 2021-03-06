import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import image1 from '../../../assets/image1.jpg';
import { Project } from '../../../common/types';
import ProjectStack from '../../../components/ProjectStack';
import { Button } from '@mui/material';

interface Props {
  project: Project;
}

const ProjectHeader: NextPage<Props> = ({ project }) => {
  const image = `${process.env.NEXT_PUBLIC_API_URL}/media/${project.image_path}`;
  console.log(image);
  return (
    <Box
      sx={{
        backgroundColor: '#007bc0',
        display: 'flex',
        gap: 2,
        padding: '2rem 10%',
        color: 'white',
      }}
    >
      <Box>
        <img alt={project.image_path} src={image} width={500} height={300} />
      </Box>
      <Box sx={{}}>
        <h1>{project.project_name}</h1>
        <h3>Area: {project.area}</h3>
        <h3>Contato: {project.contact}</h3>
        <h3>Curso: {project.course}</h3>
      </Box>
      <Box sx={{ marginLeft: 'auto' }}>
        <Button
          variant="contained"
          color="info"
          href={`/projects/${project.project_id}/edit`}
        >
          Edit this page
        </Button>
      </Box>
    </Box>
  );
};

const ProjectContent: NextPage<Props> = ({ project }) => {
  return (
    <Box
      sx={{
        padding: '1rem 10%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <h2>Descrição</h2>
          <Box sx={{ backgroundColor: 'white', padding: 2 }}>{project.description}</Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <h2>Alunos</h2>
          <Box sx={{ backgroundColor: 'white', padding: 2 }}>{project.students}</Box>
        </Box>
      </Box>
      <Box>
        <h2>Tecnologias</h2>
        <Box>
          <ProjectStack onEdit={false} stack={project.techs} />
        </Box>
      </Box>
    </Box>
  );
};

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetchProjects = async (): Promise<Project> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`).then((res) =>
      res.json()
    );
    return response;
  };

  const { isLoading, error, data } = useQuery('oneProject', fetchProjects);
  if (data == undefined) {
    if (isLoading) return <CircularProgress />;
    else return <p>Data could not be retrieved</p>;
  }
  if (error) {
    console.log(error);
    return <p>An error ocurred</p>;
  }

  console.log(data);

  return (
    <Box sx={{ backgroundColor: 'lightgray' }}>
      <ProjectHeader project={data} />
      <ProjectContent project={data} />
    </Box>
  );
};

export default ProjectPage;
