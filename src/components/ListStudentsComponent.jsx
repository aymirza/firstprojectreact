import   {Component} from "react";
import StudentService from "../services/StudentService";

class ListStudentsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
/*
    deleteStudent(id) {
        StudentService.deleteStudent(id).then(res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
*/
    viewStudent(id) {
        this.props.history.push(`/students/${id}`);
    }

    editStudent(id) {
        this.props.history.push(`/student/${id}`);
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({students: res.data});
        });
    }

    addStudent(){
        this.props.history.push(`/students`)
    }
/*
    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th>Student First Name</th>
                            <th>Student Last Name</th>
                            <th>Student year</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.students.map(
                                student =>
                                    <tr key = {student.id}>
                                        <td>{student.firstname}</td>
                                        <td>{student.lastname}</td>
                                        <td>{student.year}</td>
                                    </tr>
                            )
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

*/
}

export default ListStudentsComponent