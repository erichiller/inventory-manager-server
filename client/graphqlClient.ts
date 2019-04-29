import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
    }
  }
`;


interface Data {
    allPeople: {
      people: Array<{ id: string; name: string }>;
    };
  };
  
  interface Variables {
    first: number;
  };

const uploadOneFile = () => {
    return (
        <Mutation mutation= { UPLOAD_FILE } >
        { uploadFile => (
            <input
        type= "file"
required
onChange = {({ target: { validity, files: [file] } }) =>
validity.valid && uploadFile({ variables: { file } });
        }
/>
      )}
</Mutation>
  );
};


