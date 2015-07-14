module.exports = function(grunt){
	// Project configuration
	grunt.initConfig({
		// Remove built directory
	    clean: {
	      build: ['asset/']
	    },
	    includes: {
		  files: {
		    src: 'origin/html/*', // Source files 
		    dest: 'asset', // Destination directory 
		    flatten: true,
		    cwd: '.',
		    options: {
		      silent: true,
		      banner: '<!-- I am a banner <% includes.files.dest %> -->'
		    }
		  }
		},
		// includes: {
		 //      build: {
		 //        cwd: 'site',
		 //        src: 'origin/html/*',
		 //        dest: 'asset/',
		 //        options: {
		 //          flatten: true,
		 //          includePath: 'include',
		 //          banner: '<!-- Site built using grunt includes! -->\n'
		 //        }
		 //      }
		 //    }
		watch: {
			files: 'origin/html/**',
			tasks: ['clean', 'includes']
				
		}
	});

	// Load local tasks.
    // grunt.loadTasks('tasks');

	// 加载插件
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 默认被执行的任务列表
	grunt.registerTask('default', ['watch', 'clean', 'includes']);
}

