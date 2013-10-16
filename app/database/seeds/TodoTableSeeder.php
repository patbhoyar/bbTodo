<?php

class TodoTableSeeder extends Seeder {

	public function run()
	{
            DB::table('todo')->delete();
            
            $arr = array(
                array('taskName' => 'Get Milk', 'completed' => false),
                array('taskName' => 'Go to Gym', 'completed' => true),
                array('taskName' => 'Fight Booking', 'completed' => ''),
                array('taskName' => 'Buy Roti', 'completed' => false),
            );
            
            DB::table('todo')->insert($arr);
	}

}